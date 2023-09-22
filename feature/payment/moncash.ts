import moncash from "nodejs-moncash-sdk";

moncash.configure({
    'mode': process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
    'client_id': process.env.MONCASH_CLIENT_ID,
    'client_secret': process.env.MONCASH_CLIENT_SECRET, 
})

export { moncash }

export const getPaymentByTransactionId = (transactionId: string) => {
    moncash.capture.getByTransactionId(transactionId, function (error, capture) {
        if (error) {
            console.error(error);
        } else {
            console.log(capture);
        }
    });
}

export const getPaymentByOrderId = (orderId: string) => {
    moncash.capture.getByOrderId(orderId, function (error, capture) {
        if (error) {
            console.error(error);
        } else {
            console.log(capture);
        }
    });
}

