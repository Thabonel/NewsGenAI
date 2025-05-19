import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const tiers = {
  up_to_90_sec: {
    priceId: 'price_1RQaM6DXysaVZSVhr8KMBhVg',
    price: 49,
    name: 'Up to 90 Seconds',
    type: 'one_time'
  },
  up_to_2_min: {
    priceId: 'price_1RQaM6DXysaVZSVheQNf2pz2',
    price: 69,
    name: 'Up to 2 Minutes',
    type: 'one_time'
  },
  up_to_2_min_20_sec: {
    priceId: 'price_1RQaS9DXysaVZSVhlHLe9lyn',
    price: 79,
    name: 'Up to 2 Minutes 20 Seconds',
    type: 'one_time'
  },
  up_to_3_min: {
    priceId: 'price_1RQaS9DXysaVZSVhhO1ZffZM',
    price: 99,
    name: 'Up to 3 Minutes',
    type: 'one_time'
  },
  starter_5_up_to_2_min: {
    priceId: 'price_1RQaS9DXysaVZSVhqi7uN571',
    price: 199,
    name: 'Starter - 5 Videos up to 2 Minutes',
    type: 'subscription'
  },
  pro_10_up_to_3_min: {
    priceId: 'price_1RQaS9DXysaVZSVhrsMyfHOk',
    price: 349,
    name: 'Pro - 10 Videos up to 3 Minutes',
    type: 'subscription'
  }
} as const;

export type TierId = keyof typeof tiers;