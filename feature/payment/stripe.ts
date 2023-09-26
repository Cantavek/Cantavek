import Stripe from 'stripe';

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY as string, 
  { apiVersion: '2023-08-16' }
);

export const createStripeSession = async (items: any, client_reference_id: string) => {
  const products = items.products.map((p: any) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: p.product.title,
        },
        unit_amount: +p.product.prices.usd.price * 100,
      },
      quantity: p.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    client_reference_id,
    line_items: products,
    mode: 'payment',
    success_url: `${process.env.APP_URL}/orders/thanks?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.APP_URL}/checkout`,
  });
  return session.url;
}

export const retreiveSession = async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session
}

export { stripe }

