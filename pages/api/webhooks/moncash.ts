// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPaymentByTransactionId } from '@/feature/payment'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg?: string
  error?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    if(req.query.transactionId) {
      try{
        const referenceId = getPaymentByTransactionId(req.query.transactionId as string)
        
      }catch(e) {

      }
      // moncash.capture.getByTransactionId(req.query.transactionId, async function (error: any, capture: any) {
      //   if (error) {            
      //       console.log(error, 'error');
      //       res.status(500).json({error: "Your Transaction as Failed"});
      //       return
      //   } else {
      //     if(capture){
      //       console.log(capture, 'capture');
      //       if(capture.payment.message === 'successful') {
      //         const clientReference = capture.payment.reference
      //         const referenceId = clientReference.split('/')
      //         const orderId = referenceId[0]
      //         const userId = referenceId[1]
      //         // const user = await getUser(userId)
      //         // const items  = await getProductForOrder(cartId)
      //         // if(items?.products && user._id) {
      //         //     createOrder.CreateOrder(orderId, items.products, user._id, `gdes`)
      //         //     await clientEditor.delete(cartId)
      //         //     res.status(200).json({msg: "Your order have been created"});
      //         //     return
      //         // }
      //       }
      //     }
      //   }
      // });
    }else{
        res.status(200).json({msg: "Your Transaction Id is Incorrect"});
        return
    }
  }
}
