// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/feature/payment';
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

type Data = {
  name: string
}

export const config = {
  api: {
    bodyParser: false,
  },
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: 'John Doe' })
  if (req.method === 'POST') {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY as string;
    const sig = req.headers['stripe-signature'] as string;
    let event: Stripe.Event
    // const buff = await buffer(req);
    const buff = '';
    
    try {
      event = stripe.webhooks.constructEvent(buff, sig, endpointSecret);
    } catch (err: any) {
        res.status(400).json({ err: `Webhook Error: ${err.message}`, body: req.
        body, sig, buff});
        return;
    }
    // // checkout.session.async_payment_failed
    // //checkout.session.completed
    let session
    switch (event.type) {
      case 'checkout.session.completed': {
        session = event.data.object as {
          client_reference_id: string;
          id: string;
        };
        const referenceId = session.client_reference_id.split('/');
        const userId = referenceId[0]
        const orderId = referenceId[1]
  
        res.status(200).json({msg: "Your order have been created"});
        return
        // Then define and call a function to handle the event invoice.payment_succeeded
        break;
      } 
      default: {
        console.log(`Unhandled event type ${event.type}`);
        res.status(400).json({msg: `Unhandled event type ${event.type}`})
        return
      }
    }
  }
}
