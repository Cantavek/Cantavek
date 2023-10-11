// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPaymentByTransactionId } from '@/feature/payment'
import { client, getBundle, getSponsor, getUserByEmail } from '@/feature/sanity'
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
        const itemId = data[1]
        const userEmail = data[2];
        const paymentType = data[3]
        const user = await getUserByEmail(userEmail)

        console.log(itemId, 'itemId')
        console.log(userEmail, 'userEmail')
        
        if(!!user) {
          if(paymentType === 'payment') {
            const bundle = await getBundle(itemId)
            const expire_at = dayjs().add(bundle.duration, 'months').toISOString();

            const userPatch = client
              .patch(user._id)
              .set({ 
                active_bundle: { _ref: bundle._id, _type: 'reference' },
                active_bundle_expire_at: expire_at
              });

            client
              .transaction().patch(userPatch).create({
                _type: 'purchase',
                transactionId: req.query.transactionId,
                user: { _ref: user._id, _type: 'reference'}, 
                bundle: { _ref: bundle._id, _type: 'reference'}, 
                expire_at
              })
              .commit()
              .then(() => {
                console.log('Whole lot of stuff just happened')
              })
          }
          if(paymentType === 'sponsor'){
            const sponsor = await getSponsor(itemId);
            client.patch(sponsor._id).set({ payed: true, transactionId: req.query.transactionId })
          }
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
