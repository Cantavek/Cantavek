// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createMoncashSession } from '@/feature/payment'
import type { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { Bundle, Sponsoring, client, getBundle, getSponsorType } from '@/feature/sanity'

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
    const itemId = body?.itemId as string
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
      await client.create({
        _type: 'sponsor',
        name: body?.name,
        identity_link: body?.indentity_link,
        link: body?.link,
        sponsoring: { _ref: itemId, _type: 'reference'},
      })
    }

    try{
      const { url } = await createMoncashSession(
        item.price_gdes, 
        `${nanoid()}/${itemId}/${authSession?.user.email}/${paymentType}`
      )
      return res.status(200).json({ url, message: 'Your moncash payment url', error: false })
    }catch(e) {
      console.log(e, 'error')
      return res.status(200).json({ message: 'Your moncash attempt payment failed', error: true })
    }
    
  }
}
