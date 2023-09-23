import moncash from "nodejs-moncash-sdk";

moncash.configure({
    'mode': process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
    'client_id': process.env.MONCASH_CLIENT_ID,
    'client_secret': process.env.MONCASH_CLIENT_SECRET, 
})

export const createSession = async (
    amount: number,
    orderId: string,
  ): Promise<{ url: string; message: string }> => {
    return new Promise((resolve, reject) => {
      const creator = moncash.payment;

      const handleCreatePayment = (err: any, payment: any) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const redirectUri = creator.redirect_uri(payment) as string;
          resolve({ url: redirectUri, message: 'Moncash Payment type' });
        }
      };

      creator.create({ amount, orderId }, handleCreatePayment);
    });
  }

export const getPaymentByTransactionId = async (transactionId: string): Promise<{ referenceId: string }> => {
    return new Promise((resolve, reject) => {
        moncash.capture.getByTransactionId(transactionId, function (error: any, capture: any) {
            if (error) {            
                reject(error)
                return
            } else {
                if(capture){
                    if(capture.payment.message === 'successful') {
                        resolve({ referenceId: capture.payment.reference })
                    }
                }
                reject({ msg: "Capture dont't exist" })
            }
        });
    });
    
}

export const getPaymentByOrderId = (orderId: string) => {
    moncash.capture.getByOrderId(orderId, function (error: any, capture: any) {
        if (error) {
            console.error(error);
        } else {
            console.log(capture);
        }
    });
}



export { moncash }