import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);


router.post('/checkout', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
       locale: 'en', 
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Test Product', // Aquí luego pondrás datos reales
            },
            unit_amount: 2000, // $20.00 USD
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
