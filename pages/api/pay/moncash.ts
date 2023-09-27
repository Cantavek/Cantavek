// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createMoncashSession } from '@/feature/payment'
import type { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'

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
    try{
      const { url } = await createMoncashSession(350, nanoid())
      return res.status(200).json({ url, message: 'Your moncash payment url', error: false })
    }catch(e) {
      console.log(e, 'error')
      return res.status(200).json({ message: 'Your moncash attempt payment failed', error: true })
    }
    
  }
}
