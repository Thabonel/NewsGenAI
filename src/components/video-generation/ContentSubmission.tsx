import React, { useState } from 'react';
import Button from '../common/Button';
import { ArrowLeft, ArrowRight, RefreshCw, Check } from 'lucide-react';
import { useVideo } from '../../context/VideoContext';
import { mockProcessedScript } from '../../data/mockData';

const ContentSubmission: React.FC = () => {
  const { videoRequest, setContent, goToNextStep, goToPreviousStep } = useVideo();
  const [originalContent, setOriginalContent] = useState(videoRequest.content || '');
  const [processedContent, setProcessedContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [editableProcessedContent, setEditableProcessedContent] = useState('');
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOriginalContent(e.target.value);
  };
  
  const processContent = () => {
    if (!originalContent.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const processed = mockProcessedScript;
      setProcessedContent(processed);
      setEditableProcessedContent(processed);
      setContent(processed);
      setIsProcessing(false);
      setIsEditing(false);
    }, 2000);
  };
  
  const handleEditContent = () => {
    setIsEditing(true);
  };
  
  const handleSaveContent = () => {
    setProcessedContent(editableProcessedContent);
    setContent(editableProcessedContent);
    setIsEditing(false);
  };
  
  const handleProcessedContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableProcessedContent(e.target.value);
  };
  
  const handleContinue = () => {
    setContent(isEditing ? editableProcessedContent : processedContent);
    goToNextStep();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Submit Your Content</h2>
        <p className="text-lg text-gray-600">
          Paste your story or write a script. Our AI will optimize it for a {videoRequest.length} news video.
        </p>
      </div>

      {isEditing ? (
        processedContent ? (
          <div className="bg-white rounded-lg shadow-card p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Your News Script</h3>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={editableProcessedContent}
              onChange={handleProcessedContentChange}
              placeholder="Edit your AI-optimized news script..."
            />
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveContent} leftIcon={<Check size={16} />}>
                Save Changes
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-card p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Original Content</h3>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={originalContent}
              onChange={handleContentChange}
              placeholder="Paste or write your content here..."
            />
            <div className="flex justify-end mt-4">
              <Button 
                onClick={processContent} 
                disabled={isProcessing || !originalContent.trim()}
                isLoading={isProcessing}
                leftIcon={!isProcessing && <RefreshCw size={16} />}
              >
                {isProcessing ? 'Processing...' : 'Process Content'}
              </Button>
            </div>
          </div>
        )
      ) : (
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Your News Script</h3>
            <Button variant="outline" size="sm" onClick={handleEditContent}>
              Edit Script
            </Button>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            {processedContent.split('\n\n').map((paragraph, index) => (
              paragraph ? <p key={index} className="mb-4">{paragraph}</p> : null
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPreviousStep} leftIcon={<ArrowLeft size={16} />}>
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={isProcessing || (!processedContent && !originalContent.trim())}
          rightIcon={<ArrowRight size={16} />}
        >
          Continue to Reporter Selection
        </Button>
      </div>
    </div>
  );
};

export default ContentSubmission;