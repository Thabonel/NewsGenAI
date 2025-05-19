import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useVideo } from '../../context/VideoContext';
import { pricingOptions } from '../../data/mockData';
import { SocialPlatform } from '../../types';

const socialPlatforms: { id: SocialPlatform; label: string; icon: React.ReactNode }[] = [
  { id: 'tiktok', label: 'TikTok', icon: '📱' },
  { id: 'instagram', label: 'Instagram', icon: '📸' },
  { id: 'youtube', label: 'YouTube', icon: '▶️' },
  { id: 'facebook', label: 'Facebook', icon: '👍' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { id: 'twitter', label: 'Twitter', icon: '🐦' },
];

const PricingSelection: React.FC = () => {
  const { videoRequest, setPricingTier, togglePlatform, goToNextStep, goToPreviousStep } = useVideo();
  
  const options = pricingOptions[videoRequest.length];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Select Your Package</h2>
        <p className="text-lg text-gray-600">Choose a pricing plan that works for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {options.map((option) => (
          <Card
            key={option.id}
            className="p-6"
            hoverable
            selected={videoRequest.pricingTier === option.id}
            onClick={() => setPricingTier(option.id)}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{option.name}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="text-3xl font-bold text-primary-600">${option.price}</div>
              <p className="text-sm text-gray-500">per video</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              variant={videoRequest.pricingTier === option.id ? 'primary' : 'outline'}
              fullWidth
              onClick={() => setPricingTier(option.id)}
            >
              {videoRequest.pricingTier === option.id ? 'Selected' : 'Select Plan'}
            </Button>
          </Card>
        ))}
      </div>

      {videoRequest.pricingTier === 'full' && (
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Choose Social Media Platforms for Auto-Posting
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.id}
                className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                  videoRequest.platforms.includes(platform.id)
                    ? 'bg-primary-50 border-primary-300'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => togglePlatform(platform.id)}
              >
                <div className="mr-3 text-xl">{platform.icon}</div>
                <span className={videoRequest.platforms.includes(platform.id) ? 'font-medium' : ''}>
                  {platform.label}
                </span>
                {videoRequest.platforms.includes(platform.id) && (
                  <Check size={16} className="ml-auto text-primary-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPreviousStep} leftIcon={<ArrowLeft size={16} />}>
          Back
        </Button>
        <Button
          onClick={goToNextStep}
          rightIcon={<ArrowRight size={16} />}
        >
          Continue to Review
        </Button>
      </div>
    </div>
  );
};

export default PricingSelection;