// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPaymentByTransactionId } from '@/feature/payment'
import { client, getBundle, getUserByEmail } from '@/feature/sanity'
import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
import dayjs from 'dayjs'

type Data = {
  msg?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    if(req.query.transactionId) {
      try{
        console.log(req.query.transactionId, 'req.query.transactionId')
        // 2196468721
        const response = await getPaymentByTransactionId(req.query.transactionId)
        if(!response?.referenceId) {
          res.status(400).json({msg: "Your Transaction Id is Incorrect"});
        }
        const data = response?.referenceId.split('/')
        const bundleId = data[1]
        const userEmail = data[2];
        const user = await getUserByEmail(userEmail)
        const bundle = await getBundle(bundleId)
        console.log(bundleId, 'bundleId')
        console.log(userEmail, 'userEmail')
        
        if(!!user && !!bundle) {
          const expire_at = dayjs().add(bundle.duration, 'months').toISOString();

          const userPatch = client
            .patch(user._id)
            .set({ active_bundle: { _ref: bundleId, _type: 'reference'}});

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
    
        res.status(200).json({msg: "Your Transaction Id is Incorrect"});
        return
      }catch(e) {

      }
    }else{
      res.status(200).json({msg: "Your Transaction Id is Incorrect"});
      return
    }
  }
}
