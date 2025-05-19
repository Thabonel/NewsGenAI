export type VideoLength = '1:00' | '1:30' | '2:00' | '2:30';

export type PricingTier = 'full' | 'diy';

export type ReporterGender = 'male' | 'female';

export type ReporterEthnicity = 'caucasian' | 'african' | 'asian' | 'hispanic' | 'middleEastern';

export type ReporterTone = 'professional' | 'friendly' | 'serious' | 'energetic';

export type ReporterAccent = 'american' | 'british' | 'australian' | 'indian';

export interface Reporter {
  id: string;
  name: string;
  gender: ReporterGender;
  ethnicity: ReporterEthnicity;
  tone: ReporterTone;
  accent: ReporterAccent;
  imageUrl: string;
  previewVideoUrl?: string;
}

export interface VideoRequest {
  length: VideoLength;
  content: string;
  reporter: Reporter | null;
  pricingTier: PricingTier;
  platforms: SocialPlatform[];
}

export type SocialPlatform = 'tiktok' | 'instagram' | 'youtube' | 'facebook' | 'linkedin' | 'twitter';

export interface PricingOption {
  id: PricingTier;
  name: string;
  description: string;
  features: string[];
  price: number;
}

export type GenerationStep = 'length' | 'content' | 'reporter' | 'pricing' | 'review' | 'processing' | 'complete';