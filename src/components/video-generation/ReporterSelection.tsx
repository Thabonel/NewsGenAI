import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { ArrowLeft, ArrowRight, User, Volume2, Palette, Globe } from 'lucide-react';
import { useVideo } from '../../context/VideoContext';
import { mockReporters } from '../../data/mockData';
import { Reporter, ReporterGender, ReporterEthnicity, ReporterTone, ReporterAccent } from '../../types';

type FilterKey = 'gender' | 'ethnicity' | 'tone' | 'accent';

interface FilterOption<T> {
  value: T;
  label: string;
}

const genderOptions: FilterOption<ReporterGender>[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const ethnicityOptions: FilterOption<ReporterEthnicity>[] = [
  { value: 'caucasian', label: 'Caucasian' },
  { value: 'african', label: 'African' },
  { value: 'asian', label: 'Asian' },
  { value: 'hispanic', label: 'Hispanic' },
  { value: 'middleEastern', label: 'Middle Eastern' },
];

const toneOptions: FilterOption<ReporterTone>[] = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'serious', label: 'Serious' },
  { value: 'energetic', label: 'Energetic' },
];

const accentOptions: FilterOption<ReporterAccent>[] = [
  { value: 'american', label: 'American' },
  { value: 'british', label: 'British' },
  { value: 'australian', label: 'Australian' },
  { value: 'indian', label: 'Indian' },
];

const ReporterSelection: React.FC = () => {
  const { videoRequest, setReporter, goToNextStep, goToPreviousStep } = useVideo();
  const [filters, setFilters] = useState<{
    gender: ReporterGender | null;
    ethnicity: ReporterEthnicity | null;
    tone: ReporterTone | null;
    accent: ReporterAccent | null;
  }>({
    gender: null,
    ethnicity: null,
    tone: null,
    accent: null,
  });

  const toggleFilter = <K extends FilterKey>(key: K, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const filteredReporters = mockReporters.filter((reporter) => {
    return (
      (filters.gender === null || reporter.gender === filters.gender) &&
      (filters.ethnicity === null || reporter.ethnicity === filters.ethnicity) &&
      (filters.tone === null || reporter.tone === filters.tone) &&
      (filters.accent === null || reporter.accent === filters.accent)
    );
  });

  const handleReporterSelect = (reporter: Reporter) => {
    setReporter(reporter);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Choose Your AI Reporter</h2>
        <p className="text-lg text-gray-600">Select the perfect AI presenter for your news video</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Options</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <User size={16} className="mr-2 text-primary-600" />
              <h4 className="font-medium">Gender</h4>
            </div>
            <div className="space-y-2">
              {genderOptions.map((option) => (
                <button
                  key={option.value}
                  className={`px-3 py-1 rounded-full text-sm mr-2 ${
                    filters.gender === option.value
                      ? 'bg-primary-100 text-primary-800 border border-primary-300'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleFilter('gender', option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <Palette size={16} className="mr-2 text-primary-600" />
              <h4 className="font-medium">Ethnicity</h4>
            </div>
            <div className="flex flex-wrap">
              {ethnicityOptions.map((option) => (
                <button
                  key={option.value}
                  className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                    filters.ethnicity === option.value
                      ? 'bg-primary-100 text-primary-800 border border-primary-300'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleFilter('ethnicity', option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <Volume2 size={16} className="mr-2 text-primary-600" />
              <h4 className="font-medium">Tone</h4>
            </div>
            <div className="flex flex-wrap">
              {toneOptions.map((option) => (
                <button
                  key={option.value}
                  className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                    filters.tone === option.value
                      ? 'bg-primary-100 text-primary-800 border border-primary-300'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleFilter('tone', option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <Globe size={16} className="mr-2 text-primary-600" />
              <h4 className="font-medium">Accent</h4>
            </div>
            <div className="flex flex-wrap">
              {accentOptions.map((option) => (
                <button
                  key={option.value}
                  className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                    filters.accent === option.value
                      ? 'bg-primary-100 text-primary-800 border border-primary-300'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleFilter('accent', option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredReporters.map((reporter) => (
          <Card
            key={reporter.id}
            className="overflow-hidden"
            hoverable
            selected={videoRequest.reporter?.id === reporter.id}
            onClick={() => handleReporterSelect(reporter)}
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-t-md">
              <img
                src={reporter.imageUrl}
                alt={reporter.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{reporter.name}</h3>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-1">Tone:</span>
                  <span className="font-medium text-gray-800 capitalize">{reporter.tone}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-1">Accent:</span>
                  <span className="font-medium text-gray-800 capitalize">{reporter.accent}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPreviousStep} leftIcon={<ArrowLeft size={16} />}>
          Back
        </Button>
        <Button
          onClick={goToNextStep}
          disabled={!videoRequest.reporter}
          rightIcon={<ArrowRight size={16} />}
        >
          Continue to Pricing
        </Button>
      </div>
    </div>
  );
};

export default ReporterSelection;