const moncash = require('nodejs-moncash-sdk');

moncash.configure({
    'mode': process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
    'client_id': process.env.MONCASH_CLIENT_ID,
    'client_secret': process.env.MONCASH_CLIENT_SECRET, 
})

export const createMoncashSession = async (amount, orderId) => {
    return new Promise((resolve, reject) => {
      const creator = moncash.payment;

      const handleCreatePayment = (err, payment) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const redirectUri = creator.redirect_uri(payment);
          resolve({ url: redirectUri, message: 'Moncash Payment type' });
        }
      };
      creator.create({ amount, orderId }, handleCreatePayment);
    });
  }

export const getPaymentByTransactionId = async (transactionId) => {
    return new Promise((resolve, reject) => {
        moncash.capture.getByTransactionId(transactionId, function (error, capture) {
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

export const getPaymentByOrderId = (orderId) => {
    moncash.capture.getByOrderId(orderId, function (error, capture) {
        if (error) {
            console.error(error);
        } else {
            console.log(capture);
        }
    });
}



export { moncash }