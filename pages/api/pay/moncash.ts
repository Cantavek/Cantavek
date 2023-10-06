// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createMoncashSession } from '@/feature/payment'
import type { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { getBundle } from '@/feature/sanity'

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
      const { url } = await createMoncashSession(
        bundle.price_gdes, 
        `${nanoid()}/${bundleId}/${authSession?.user.email}`
      )
      return res.status(200).json({ url, message: 'Your moncash payment url', error: false })
    }catch(e) {
      console.log(e, 'error')
      return res.status(200).json({ message: 'Your moncash attempt payment failed', error: true })
    }
    
  }
}
