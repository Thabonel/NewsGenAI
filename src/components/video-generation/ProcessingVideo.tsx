import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import { Download, Share } from 'lucide-react';
import { useVideo } from '../../context/VideoContext';

const ProcessingVideo: React.FC = () => {
  const { videoRequest, goToNextStep } = useVideo();
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsProcessing(false);
          setVideoUrl('https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
          return 100;
        }
        return prevProgress + 5;
      });
    }, 500);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const handleDownload = () => {
    if (videoUrl) {
      const a = document.createElement('a');
      a.href = videoUrl;
      a.download = 'newsgen-video.mp4';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  
  const handleComplete = () => {
    goToNextStep();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {isProcessing ? 'Generating Your Video' : 'Your Video Is Ready!'}
        </h2>
        <p className="text-lg text-gray-600">
          {isProcessing
            ? 'Please wait while we create your professional news video'
            : 'Your AI-generated news video is ready to use'}
        </p>
      </div>

      {isProcessing ? (
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md mb-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-100">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary-600">
                      {progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-100">
                  <div
                    style={{ width: `${progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="font-medium text-gray-900 mb-2">Processing Steps:</h3>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                <li className={`flex items-center ${progress >= 20 ? 'text-success-600' : 'text-gray-500'}`}>
                  <span className={`inline-block w-4 h-4 mr-2 rounded-full ${progress >= 20 ? 'bg-success-600' : 'bg-gray-200'}`}></span>
                  Optimizing script format
                </li>
                <li className={`flex items-center ${progress >= 40 ? 'text-success-600' : 'text-gray-500'}`}>
                  <span className={`inline-block w-4 h-4 mr-2 rounded-full ${progress >= 40 ? 'bg-success-600' : 'bg-gray-200'}`}></span>
                  Generating AI voiceover
                </li>
                <li className={`flex items-center ${progress >= 60 ? 'text-success-600' : 'text-gray-500'}`}>
                  <span className={`inline-block w-4 h-4 mr-2 rounded-full ${progress >= 60 ? 'bg-success-600' : 'bg-gray-200'}`}></span>
                  Creating visuals
                </li>
                <li className={`flex items-center ${progress >= 80 ? 'text-success-600' : 'text-gray-500'}`}>
                  <span className={`inline-block w-4 h-4 mr-2 rounded-full ${progress >= 80 ? 'bg-success-600' : 'bg-gray-200'}`}></span>
                  Adding text overlays and transitions
                </li>
                <li className={`flex items-center ${progress >= 100 ? 'text-success-600' : 'text-gray-500'}`}>
                  <span className={`inline-block w-4 h-4 mr-2 rounded-full ${progress >= 100 ? 'bg-success-600' : 'bg-gray-200'}`}></span>
                  Finalizing video rendering
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl mb-6">
              {videoUrl && (
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    src={videoUrl}
                    poster="https://images.pexels.com/photos/7236797/pexels-photo-7236797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  ></video>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
              {videoRequest.pricingTier === 'diy' ? (
                <Button
                  fullWidth
                  size="lg"
                  leftIcon={<Download size={18} />}
                  onClick={handleDownload}
                >
                  Download Video
                </Button>
              ) : (
                <>
                  <Button
                    fullWidth
                    size="lg"
                    leftIcon={<Download size={18} />}
                    onClick={handleDownload}
                  >
                    Download Video
                  </Button>
                  <Button
                    fullWidth
                    size="lg"
                    variant="secondary"
                    leftIcon={<Share size={18} />}
                  >
                    Share to Social
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {!isProcessing && (
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleComplete}
          >
            Complete
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProcessingVideo;