import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { PlayCircle, Award, Zap, Globe, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-900 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Create Professional News Videos with AI
            </h1>
            <p className="text-xl mb-8 text-primary-100 max-w-lg">
              Transform your content into engaging news-style videos with AI presenters and voiceovers in minutes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/create">
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  Create Video Now
                </Button>
              </Link>
              <Link to="/examples">
                <Button size="lg" variant="outline" leftIcon={<PlayCircle size={18} />}>
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7236707/pexels-photo-7236707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="News presenter"
                className="w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                  <PlayCircle size={36} className="text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Create Videos in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our intuitive process makes it easy to create professional news videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Select Video Length</h3>
              <p className="text-gray-600">Choose the perfect duration for your news video</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Write Your Script</h3>
              <p className="text-gray-600">Submit your content and our AI will optimize it</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Choose AI Reporter</h3>
              <p className="text-gray-600">Select from multiple AI presenters with different styles</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Generate & Share</h3>
              <p className="text-gray-600">Create your video and share it across social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose NewsGenAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform offers unique benefits that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fast & Efficient</h3>
              <p className="text-gray-600">
                Create professional news videos in minutes, not hours. Our AI technology streamlines the entire process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Quality</h3>
              <p className="text-gray-600">
                Get broadcast-quality videos with professional AI presenters, graphics, and polished voiceovers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-Platform Sharing</h3>
              <p className="text-gray-600">
                Automatically share your videos across all major social media platforms with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your First Video?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using NewsGenAI to create engaging video content
          </p>
          <Link to="/create">
            <Button size="lg" className="bg-white text-accent-600 hover:bg-gray-100">
              Start Creating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;