import React from 'react';
import { ArrowRight, Video, Wand2, Share2, BarChart } from 'lucide-react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Create Professional News Videos in Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your content into engaging news broadcasts with our AI-powered platform.
              No video editing experience required.
            </p>
            <Link to="/create">
              <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                Start Creating Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Video size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  1. Choose Your Video Length
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Select the perfect duration for your news video, from quick 1-minute updates to comprehensive 3-minute reports.
                  Our AI optimizes your content to fit the chosen length perfectly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    1-minute videos for social media
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    2-minute videos for detailed coverage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    3-minute videos for in-depth reporting
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Video length selection"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1 relative">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="AI content optimization"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Wand2 size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  2. Submit Your Content
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Simply paste your story or write a script. Our AI technology automatically optimizes
                  your content for broadcast-style delivery, ensuring professional results every time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    AI script optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Professional news formatting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Natural language processing
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Share2 size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  3. Generate and Share
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  With one click, our AI creates your professional news video. Choose from multiple
                  AI presenters and automatically share across your social media platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Multiple AI presenter options
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    One-click social sharing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    High-quality video output
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Video sharing"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <img
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Analytics dashboard"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <BarChart size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  4. Track Performance
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Monitor your video's performance across all platforms with our comprehensive
                  analytics dashboard. Understand what works and optimize future content.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Engagement metrics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Cross-platform analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Performance insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your First Video?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join thousands of businesses using NewsGenAI to create engaging video content.
          </p>
          <Link to="/create">
            <Button
              size="lg"
              className="bg-white text-primary-900 hover:bg-gray-100"
              rightIcon={<ArrowRight size={20} />}
            >
              Start Creating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;