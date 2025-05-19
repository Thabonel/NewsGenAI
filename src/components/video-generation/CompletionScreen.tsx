import React from 'react';
import Button from '../common/Button';
import { CheckCircle, Plus } from 'lucide-react';
import { useVideo } from '../../context/VideoContext';

const CompletionScreen: React.FC = () => {
  const { resetRequest } = useVideo();
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle size={72} className="text-success-500" />
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Congratulations!
      </h2>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Your news video has been successfully created and is ready to use.
        {/* Add different text based on the pricing tier if necessary */}
      </p>
      
      <div className="bg-white rounded-lg shadow-card p-8 mb-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h3>
        
        <ul className="space-y-4 text-left mb-6">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-800 mr-3 text-xs font-medium">1</span>
            <span>
              <span className="font-medium">Share your video</span> across your social media platforms and monitor engagement.
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-800 mr-3 text-xs font-medium">2</span>
            <span>
              <span className="font-medium">Analyze performance</span> to understand what content resonates with your audience.
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-800 mr-3 text-xs font-medium">3</span>
            <span>
              <span className="font-medium">Create another video</span> to maintain consistent engagement with your audience.
            </span>
          </li>
        </ul>
        
        <Button
          size="lg"
          leftIcon={<Plus size={18} />}
          onClick={resetRequest}
        >
          Create Another Video
        </Button>
      </div>
    </div>
  );
};

export default CompletionScreen;