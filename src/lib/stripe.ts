import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const stripePrices = {
  up_to_90_sec: 'price_1RQaM6DXysaVZSVhr8KMBhVg',
  up_to_2_min: 'price_1RQaM6DXysaVZSVheQNf2pz2',
  up_to_2_min_20_sec: 'price_1RQaS9DXysaVZSVhlHLe9lyn',
  up_to_3_min: 'price_1RQaS9DXysaVZSVhhO1ZffZM',
  starter_5_up_to_2_min: 'price_1RQaS9DXysaVZSVhqi7uN571',
  pro_10_up_to_3_min: 'price_1RQaS9DXysaVZSVhrsMyfHOk'
} as const;

export type StripePriceId = keyof typeof stripePrices;