// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createStripeSession } from '@/feature/payment';
import { Bundle, Sponsoring, client, getBundle, getSponsorType } from '@/feature/sanity';
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
    const body = (JSON.parse(req.body))
    let itemId = body?.itemId as string
    const paymentType = body?.type as 'payment' | 'sponsor'

    if(!itemId) {
      return res
      .status(200)
      .send({ message: "You don't provide a bundle ID.", error: true });
    }
    let item: Bundle | Sponsoring;

    if(paymentType === 'payment') {
      item = await getBundle(itemId)
    }else{
      item = await getSponsorType(itemId)
    }

    if(!item) {
      return res
      .status(200)
      .send({ message: "This item not exist.", error: true });
    }

    if(paymentType === 'sponsor') {
      const sponsorId = nanoid()
      await client.create({
        _type: 'sponsor',
        _id: sponsorId,
        name: body?.name,
        identity_link: body?.indentity_link,
        link: body?.link,
        sponsoring: { _ref: itemId, _type: 'reference'},
      })
      itemId = sponsorId;
    }

    try{
      const client_reference_id = `${nanoid()}/${itemId}/${authSession?.user.email}/${paymentType}`
      const session = await createStripeSession(
        {
          name: item.name,
          price: item.price_usd,
          // description: `Bundle will be valid during ${bundle.duration} months`
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
