import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { Clock } from 'lucide-react';
import { VideoLength } from '../../types';
import { useVideo } from '../../context/VideoContext';

const videoLengthOptions: { value: VideoLength; label: string; description: string }[] = [
  {
    value: '1:00',
    label: '1 Minute',
    description: 'Perfect for social media shorts and quick updates',
  },
  {
    value: '1:30',
    label: '1 Minute 30 Seconds',
    description: 'Ideal for more detailed social media content',
  },
  {
    value: '2:00',
    label: '2 Minutes',
    description: 'Comprehensive coverage for complex topics',
  },
  {
    value: '2:30',
    label: '2 Minutes 30 Seconds',
    description: 'In-depth analysis and detailed reporting',
  },
];

const LengthSelection: React.FC = () => {
  const { videoRequest, setVideoLength, goToNextStep } = useVideo();
  
  const handleLengthSelect = (length: VideoLength) => {
    setVideoLength(length);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Select Your Video Length</h2>
        <p className="text-lg text-gray-600">Choose the perfect duration for your news video</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {videoLengthOptions.map((option) => (
          <Card 
            key={option.value}
            className="p-6"
            hoverable
            selected={videoRequest.length === option.value}
            onClick={() => handleLengthSelect(option.value)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{option.label}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={goToNextStep}
          disabled={!videoRequest.length}
        >
          Continue to Content
        </Button>
      </div>
    </div>
  );
};

export default LengthSelection;