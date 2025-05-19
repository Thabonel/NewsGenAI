import React from 'react';
import { useVideo } from '../../context/VideoContext';
import ProgressSteps from '../common/ProgressSteps';
import LengthSelection from './LengthSelection';
import ContentSubmission from './ContentSubmission';
import ReporterSelection from './ReporterSelection';
import PricingSelection from './PricingSelection';
import ReviewOrder from './ReviewOrder';
import ProcessingVideo from './ProcessingVideo';
import CompletionScreen from './CompletionScreen';

const steps = [
  { id: 'length', label: 'Length' },
  { id: 'content', label: 'Script' },
  { id: 'reporter', label: 'Reporter' },
  { id: 'pricing', label: 'Package' },
  { id: 'review', label: 'Review' },
];

const VideoGenerator: React.FC = () => {
  const { currentStep } = useVideo();

  const renderStep = () => {
    switch (currentStep) {
      case 'length':
        return <LengthSelection />;
      case 'content':
        return <ContentSubmission />;
      case 'reporter':
        return <ReporterSelection />;
      case 'pricing':
        return <PricingSelection />;
      case 'review':
        return <ReviewOrder />;
      case 'processing':
        return <ProcessingVideo />;
      case 'complete':
        return <CompletionScreen />;
      default:
        return <LengthSelection />;
    }
  };

  // Hide the progress steps for the final screens
  const showProgressSteps = currentStep !== 'processing' && currentStep !== 'complete';

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto">
        {showProgressSteps && (
          <div className="max-w-5xl mx-auto px-4 mb-4">
            <ProgressSteps steps={steps} currentStep={currentStep} />
          </div>
        )}
        {renderStep()}
      </div>
    </div>
  );
};

export default VideoGenerator;