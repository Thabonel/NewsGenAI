import React from 'react';
import { GenerationStep } from '../../types';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  steps: Array<{
    id: GenerationStep;
    label: string;
  }>;
  currentStep: GenerationStep;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps, currentStep }) => {
  const getCurrentStepIndex = () => {
    return steps.findIndex((step) => step.id === currentStep);
  };

  const isCompleted = (stepId: GenerationStep) => {
    const currentIndex = getCurrentStepIndex();
    const stepIndex = steps.findIndex((step) => step.id === stepId);
    return stepIndex < currentIndex;
  };

  const isActive = (stepId: GenerationStep) => {
    return stepId === currentStep;
  };

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  isCompleted(step.id)
                    ? 'bg-primary-600 text-white'
                    : isActive(step.id)
                    ? 'bg-primary-100 border-2 border-primary-600 text-primary-600'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isCompleted(step.id) ? (
                  <Check size={16} />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  isActive(step.id) || isCompleted(step.id)
                    ? 'text-primary-600'
                    : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] ${
                  isCompleted(steps[index + 1].id) ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;