import React from 'react';
import Button from '../common/Button';
import { ArrowLeft, ArrowRight, Clock, User, DollarSign, Share2 } from 'lucide-react';
import { useVideo } from '../../context/VideoContext';
import { pricingOptions } from '../../data/mockData';
import { SocialPlatform } from '../../types';

const socialPlatformLabels: Record<SocialPlatform, string> = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  youtube: 'YouTube',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
};

const ReviewOrder: React.FC = () => {
  const { videoRequest, goToNextStep, goToPreviousStep, goToStep } = useVideo();
  
  const pricingOption = pricingOptions[videoRequest.length].find(
    (option) => option.id === videoRequest.pricingTier
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Review Your Order</h2>
        <p className="text-lg text-gray-600">Check your video details before generating</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4">
              Video Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Video Length</h4>
                  <p className="text-gray-900">{videoRequest.length}</p>
                  <button 
                    className="text-sm text-primary-600 hover:text-primary-700 mt-1"
                    onClick={() => goToStep('length')}
                  >
                    Change
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Selected Reporter</h4>
                  <p className="text-gray-900">{videoRequest.reporter?.name}</p>
                  <p className="text-sm text-gray-600">
                    {videoRequest.reporter?.tone} tone, {videoRequest.reporter?.accent} accent
                  </p>
                  <button 
                    className="text-sm text-primary-600 hover:text-primary-700 mt-1"
                    onClick={() => goToStep('reporter')}
                  >
                    Change
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <DollarSign className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Selected Package</h4>
                  <p className="text-gray-900">{pricingOption?.name}</p>
                  <p className="text-sm text-gray-600">${pricingOption?.price} per video</p>
                  <button 
                    className="text-sm text-primary-600 hover:text-primary-700 mt-1"
                    onClick={() => goToStep('pricing')}
                  >
                    Change
                  </button>
                </div>
              </div>
              
              {videoRequest.pricingTier === 'full' && (
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <Share2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Social Media Platforms</h4>
                    <div className="flex flex-wrap mt-1">
                      {videoRequest.platforms.map((platform) => (
                        <span key={platform} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mr-2 mb-2">
                          {socialPlatformLabels[platform]}
                        </span>
                      ))}
                    </div>
                    <button 
                      className="text-sm text-primary-600 hover:text-primary-700 mt-1"
                      onClick={() => goToStep('pricing')}
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4">
              Script Preview
            </h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 max-h-80 overflow-y-auto">
              {videoRequest.content.split('\n\n').map((paragraph, index) => (
                paragraph ? <p key={index} className="mb-4">{paragraph}</p> : null
              ))}
            </div>
            <button 
              className="text-sm text-primary-600 hover:text-primary-700 mt-2"
              onClick={() => goToStep('content')}
            >
              Edit Script
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-8">
        <h3 className="font-semibold text-primary-800 mb-2">Ready to Generate Your Video?</h3>
        <p className="text-primary-700">
          Click 'Generate Video' to create your professional news-style video with {videoRequest.reporter?.name}.
          {videoRequest.pricingTier === 'full' 
            ? " We'll also auto-post to your selected social media platforms." 
            : " You'll be able to download your video when it's ready."}
        </p>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPreviousStep} leftIcon={<ArrowLeft size={16} />}>
          Back
        </Button>
        <Button
          size="lg"
          onClick={goToNextStep}
        >
          Generate Video
        </Button>
      </div>
    </div>
  );
};

export default ReviewOrder;