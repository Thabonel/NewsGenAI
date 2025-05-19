import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { tiers } from '../lib/stripe';
import { useStripe } from '../hooks/useStripe';
import { useAuth } from '../hooks/useAuth';

const PricingPage: React.FC = () => {
  const { createCheckoutSession, loading, error } = useStripe();
  const { user } = useAuth();

  const handleSubscribe = async (tierId: keyof typeof tiers) => {
    await createCheckoutSession(tierId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your video content needs.
              No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {error && (
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-error-50 border border-error-200 text-error-700 px-6 py-4 rounded-lg">
            {error}
          </div>
        </div>
      )}

      {/* One-Time Purchase Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pay Per Video
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {Object.entries(tiers)
              .filter(([_, tier]) => tier.type === 'one_time')
              .map(([id, tier]) => (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-card p-8 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-6">
                    ${tier.price}
                    <span className="text-base font-normal text-gray-500">/video</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>Professional AI presenter</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>HD video quality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>Script optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>Commercial usage rights</span>
                    </li>
                  </ul>
                  {user ? (
                    <Button
                      fullWidth
                      onClick={() => handleSubscribe(id as keyof typeof tiers)}
                      isLoading={loading}
                    >
                      Get Started
                    </Button>
                  ) : (
                    <Link to="/create">
                      <Button fullWidth>Sign Up to Start</Button>
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Monthly Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(tiers)
              .filter(([_, tier]) => tier.type === 'subscription')
              .map(([id, tier]) => (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-card p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-6">
                    ${tier.price}
                    <span className="text-base font-normal text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>All features from one-time plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>Priority video generation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  {user ? (
                    <Button
                      fullWidth
                      size="lg"
                      onClick={() => handleSubscribe(id as keyof typeof tiers)}
                      isLoading={loading}
                    >
                      Subscribe Now
                    </Button>
                  ) : (
                    <Link to="/create">
                      <Button fullWidth size="lg">Sign Up to Subscribe</Button>
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What's included in each video?
              </h3>
              <p className="text-gray-600">
                Each video includes professional AI presenter, script optimization,
                HD video quality, background music, and commercial usage rights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. You'll continue
                to have access to the service until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express)
                through our secure payment processor, Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Creating Professional Videos Today
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Choose your plan and transform your content into engaging news videos.
          </p>
          <Link to="/create">
            <Button
              size="lg"
              className="bg-white text-primary-900 hover:bg-gray-100"
              rightIcon={<ArrowRight size={20} />}
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;