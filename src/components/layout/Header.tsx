import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Monitor, LogOut } from 'lucide-react';
import Button from '../common/Button';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [authModal, setAuthModal] = React.useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login',
  });
  
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 text-white p-1.5 rounded">
                <Monitor size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">
                NewsGen<span className="text-primary-600">AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 font-medium">
                How It Works
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-primary-600 font-medium">
                Pricing
              </Link>
              <Link to="/examples" className="text-gray-700 hover:text-primary-600 font-medium">
                Examples
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="outline" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSignOut}
                    leftIcon={<LogOut size={16} />}
                  >
                    Sign Out
                  </Button>
                  <Link to="/create">
                    <Button size="sm">Create Video</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
                  >
                    Log In
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/how-it-works"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  to="/pricing"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/examples"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Examples
                </Link>
                <div className="pt-2 flex flex-col space-y-2">
                  {user ? (
                    <>
                      <Link to="/dashboard">
                        <Button variant="outline" fullWidth>
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={handleSignOut}
                        leftIcon={<LogOut size={16} />}
                      >
                        Sign Out
                      </Button>
                      <Link to="/create">
                        <Button fullWidth>Create Video</Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={() => {
                          setIsMenuOpen(false);
                          setAuthModal({ isOpen: true, mode: 'login' });
                        }}
                      >
                        Log In
                      </Button>
                      <Button
                        fullWidth
                        onClick={() => {
                          setIsMenuOpen(false);
                          setAuthModal({ isOpen: true, mode: 'signup' });
                        }}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </>
  );
};

export default Header;