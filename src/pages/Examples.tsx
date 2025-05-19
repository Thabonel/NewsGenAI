import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../components/common/Button';

interface ExampleVideo {
  id: string;
  title: string;
  description: string;
  length: string;
  reporter: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: 'news' | 'business' | 'technology' | 'lifestyle';
}

const exampleVideos: ExampleVideo[] = [
  {
    id: '1',
    title: 'Tech Giant Unveils Revolutionary AI Chip',
    description: 'Breaking news coverage of the latest advancement in AI technology, featuring detailed analysis and expert insights.',
    length: '2:00',
    reporter: 'Michael Chen',
    thumbnailUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    category: 'technology'
  },
  {
    id: '2',
    title: 'Global Markets Weekly Update',
    description: 'Comprehensive market analysis and financial insights delivered in a concise news format.',
    length: '1:30',
    reporter: 'Sophia Rodriguez',
    thumbnailUrl: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    category: 'business'
  },
  {
    id: '3',
    title: 'Sustainable Living Trends 2025',
    description: 'Exploring the latest eco-friendly lifestyle trends and their impact on urban living.',
    length: '2:30',
    reporter: 'Aisha Johnson',
    thumbnailUrl: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    category: 'lifestyle'
  },
  {
    id: '4',
    title: 'Breaking: Space Mission Success',
    description: 'Live coverage of the historic space mission achievement with expert commentary.',
    length: '1:00',
    reporter: 'David Williams',
    thumbnailUrl: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    category: 'news'
  }
];

const Examples: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<ExampleVideo['category'] | 'all'>('all');
  const [selectedVideo, setSelectedVideo] = React.useState<ExampleVideo | null>(null);

  const filteredVideos = selectedCategory === 'all'
    ? exampleVideos
    : exampleVideos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See NewsGenAI in Action
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our collection of AI-generated news videos across different topics and styles.
              Experience the quality and professionalism of our platform.
            </p>
            <Link to="/create">
              <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                Create Your Own Video
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'news', 'business', 'technology', 'lifestyle'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category as typeof selectedCategory)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play size={32} className="text-primary-600 ml-1" />
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {video.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      Reporter: {video.reporter}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={selectedVideo.videoUrl}
              />
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Video?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join thousands of businesses using NewsGenAI to create professional news videos.
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

export default Examples;