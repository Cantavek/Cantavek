import { stripe } from '@/feature/payment';
import { client, getBundle, getUserByEmail } from '@/feature/sanity';
import dayjs from 'dayjs';
import type { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'stream/consumers';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY as string;
    const sig = req.headers['stripe-signature'] as string;
    let event: Stripe.Event
    const buff = await buffer(req);
    
    try {
      event = stripe.webhooks.constructEvent(buff, sig, endpointSecret);
    } catch (err: any) {
        res.status(400).json({ err: `Webhook Error: ${err.message}`, body: req.
        body, sig, buff});
        return;
    }

    let session
    switch (event.type) {
      case 'checkout.session.completed': {
        session = event.data.object as {
          client_reference_id: string;
          id: string;
        };
        const referenceId = session.client_reference_id.split('/');
        const bundleId = referenceId[1]
        const userEmail = referenceId[2]

        const user = await getUserByEmail(userEmail)
        const bundle = await getBundle(bundleId)

        if(!!user && !!bundle) {
          const expire_at = dayjs().add(bundle.duration, 'months').toISOString();

          const userPatch = client
            .patch(user._id)
            .set({ 
              active_bundle: { _ref: bundleId, _type: 'reference' },
              active_bundle_expire_at: expire_at
            });

          client
            .transaction().patch(userPatch).create({
              _type: 'purchase',
              user: { _ref: user._id, _type: 'reference'}, 
              bundle: { _ref: bundleId, _type: 'reference'}, 
              expire_at
            })
            .commit()
            .then(() => {
              console.log('Whole lot of stuff just happened')
            })
        }
        // Then define and call a function to handle the event invoice.payment_succeeded
        break;
      } 
      default: {
        console.log(`Unhandled event type ${event.type}`);
        res.status(400).json({msg: `Unhandled event type ${event.type}`})
        return
      }
    }

    res.status(200).json({msg: "Your order have been created"});
    return
  }
}
