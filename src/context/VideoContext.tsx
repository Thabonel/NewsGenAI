import React, { createContext, useContext, useState, ReactNode } from 'react';
import { VideoRequest, VideoLength, Reporter, PricingTier, GenerationStep, SocialPlatform } from '../types';

interface VideoContextType {
  videoRequest: VideoRequest;
  setVideoLength: (length: VideoLength) => void;
  setContent: (content: string) => void;
  setReporter: (reporter: Reporter) => void;
  setPricingTier: (tier: PricingTier) => void;
  togglePlatform: (platform: SocialPlatform) => void;
  currentStep: GenerationStep;
  goToStep: (step: GenerationStep) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  resetRequest: () => void;
}

const initialVideoRequest: VideoRequest = {
  length: '1:00',
  content: '',
  reporter: null,
  pricingTier: 'full',
  platforms: ['tiktok', 'instagram', 'youtube', 'facebook', 'linkedin', 'twitter'],
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [videoRequest, setVideoRequest] = useState<VideoRequest>(initialVideoRequest);
  const [currentStep, setCurrentStep] = useState<GenerationStep>('length');

  const steps: GenerationStep[] = ['length', 'content', 'reporter', 'pricing', 'review', 'processing', 'complete'];

  const setVideoLength = (length: VideoLength) => {
    setVideoRequest((prev) => ({ ...prev, length }));
  };

  const setContent = (content: string) => {
    setVideoRequest((prev) => ({ ...prev, content }));
  };

  const setReporter = (reporter: Reporter) => {
    setVideoRequest((prev) => ({ ...prev, reporter }));
  };

  const setPricingTier = (pricingTier: PricingTier) => {
    setVideoRequest((prev) => ({ ...prev, pricingTier }));
  };

  const togglePlatform = (platform: SocialPlatform) => {
    setVideoRequest((prev) => {
      const platforms = prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform];
      return { ...prev, platforms };
    });
  };

  const goToStep = (step: GenerationStep) => {
    setCurrentStep(step);
  };

  const goToNextStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const resetRequest = () => {
    setVideoRequest(initialVideoRequest);
    setCurrentStep('length');
  };

  return (
    <VideoContext.Provider
      value={{
        videoRequest,
        setVideoLength,
        setContent,
        setReporter,
        setPricingTier,
        togglePlatform,
        currentStep,
        goToStep,
        goToNextStep,
        goToPreviousStep,
        resetRequest,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = (): VideoContextType => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};