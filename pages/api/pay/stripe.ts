// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createStripeSession } from '@/feature/payment';
import { getBundle } from '@/feature/sanity';
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

type Data = {
  url?: string
  message: string
  error: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
    const authSession = await getServerSession(req, res, authOptions)

    if(!authSession || !authSession?.user){
      return res
      .status(200)
      .send({ message: "You are not authenticated.", error: true });
    }
    
    const bundleId = (JSON.parse(req.body))?.bundle

    if(!bundleId) {
      return res
      .status(200)
      .send({ message: "You don't provide a bundle ID.", error: true });
    }
    const bundle = await getBundle(bundleId)

    if(!bundle) {
      return res
      .status(200)
      .send({ message: "This bundle not exist.", error: true });
    }

    try{
      const client_reference_id = `${nanoid()}/${bundleId}/${authSession?.user.email}`
      const session = await createStripeSession(
        {
          name: bundle.name,
          price: bundle.price_usd,
          description: `Bundle will be valid during ${bundle.duration} months`
        },
        client_reference_id,
      );
      return res
        .status(200)
        .send({ url: session.url as string, message: 'Stripe Payment type', error: false });
    }catch(e){
      console.log(e, 'errror')
      return res
        .status(200)
        .send({  message: 'Stripe Payment process failed', error: true });
    }
  }
}
