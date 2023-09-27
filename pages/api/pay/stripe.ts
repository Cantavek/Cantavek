// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createStripeSession } from '@/feature/payment';
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url?: string
  message: string
  error: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    const session = await createStripeSession(
      nanoid(),
      '',
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
