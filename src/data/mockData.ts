import { Reporter, PricingOption } from '../types';

export const mockReporters: Reporter[] = [
  {
    id: '1',
    name: 'Michael Chen',
    gender: 'male',
    ethnicity: 'asian',
    tone: 'professional',
    accent: 'american',
    imageUrl: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    name: 'Sophia Rodriguez',
    gender: 'female',
    ethnicity: 'hispanic',
    tone: 'friendly',
    accent: 'american',
    imageUrl: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    name: 'David Williams',
    gender: 'male',
    ethnicity: 'caucasian',
    tone: 'serious',
    accent: 'british',
    imageUrl: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    name: 'Aisha Johnson',
    gender: 'female',
    ethnicity: 'african',
    tone: 'energetic',
    accent: 'american',
    imageUrl: 'https://images.pexels.com/photos/6805768/pexels-photo-6805768.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    name: 'James Wilson',
    gender: 'male',
    ethnicity: 'caucasian',
    tone: 'professional',
    accent: 'australian',
    imageUrl: 'https://images.pexels.com/photos/5792628/pexels-photo-5792628.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    name: 'Priya Patel',
    gender: 'female',
    ethnicity: 'asian',
    tone: 'friendly',
    accent: 'indian',
    imageUrl: 'https://images.pexels.com/photos/7319313/pexels-photo-7319313.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const pricingOptions: Record<string, PricingOption[]> = {
  '1:00': [
    {
      id: 'full',
      name: 'Full Service',
      description: 'AI-generated video with automatic posting to all platforms',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'Auto-posting to all selected platforms',
        'Performance analytics dashboard',
      ],
      price: 49,
    },
    {
      id: 'diy',
      name: 'DIY Download',
      description: 'AI-generated video with download option',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'High-quality video download',
        'Unlimited usage rights',
      ],
      price: 29,
    },
  ],
  '1:30': [
    {
      id: 'full',
      name: 'Full Service',
      description: 'AI-generated video with automatic posting to all platforms',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'Auto-posting to all selected platforms',
        'Performance analytics dashboard',
      ],
      price: 69,
    },
    {
      id: 'diy',
      name: 'DIY Download',
      description: 'AI-generated video with download option',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'High-quality video download',
        'Unlimited usage rights',
      ],
      price: 39,
    },
  ],
  '2:00': [
    {
      id: 'full',
      name: 'Full Service',
      description: 'AI-generated video with automatic posting to all platforms',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'Auto-posting to all selected platforms',
        'Performance analytics dashboard',
      ],
      price: 89,
    },
    {
      id: 'diy',
      name: 'DIY Download',
      description: 'AI-generated video with download option',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'High-quality video download',
        'Unlimited usage rights',
      ],
      price: 49,
    },
  ],
  '2:30': [
    {
      id: 'full',
      name: 'Full Service',
      description: 'AI-generated video with automatic posting to all platforms',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'Auto-posting to all selected platforms',
        'Performance analytics dashboard',
      ],
      price: 109,
    },
    {
      id: 'diy',
      name: 'DIY Download',
      description: 'AI-generated video with download option',
      features: [
        'AI script optimization',
        'Professional news-style video',
        'High-quality video download',
        'Unlimited usage rights',
      ],
      price: 59,
    },
  ],
};

export const mockProcessedScript = `
In a groundbreaking development, researchers at the University of Technology have announced a significant breakthrough in renewable energy storage.

The team, led by Dr. Sarah Chen, has developed a new type of battery that can store solar and wind energy with unprecedented efficiency.

"This technology could be the missing piece in the renewable energy puzzle," says Dr. Chen. "It addresses the intermittent nature of solar and wind power."

The battery uses abundant, non-toxic materials and can retain charge for up to six months with minimal loss.

Industry experts predict this could accelerate the global transition to clean energy, potentially reducing carbon emissions by 30% within the next decade.

The team is now working with manufacturing partners to scale up production, with consumer products expected to hit the market by early next year.

This is Michael Chen, reporting for NewsGen AI.
`;