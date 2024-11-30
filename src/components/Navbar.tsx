import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className="bg-[#0E1624] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Team', path: '/team' },
                { name: 'Matches', path: '/matches' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Achievements', path: '/achievements' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium hover:text-yellow-400 transition-colors ${
                    location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="ml-4 bg-yellow-500 text-[#0E1624] px-6 py-2 rounded font-medium hover:bg-yellow-400 transition-colors">
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Team', path: '/team' },
                { name: 'Matches', path: '/matches' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Achievements', path: '/achievements' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-sm text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 mt-4">
                <button className="w-full bg-yellow-500 text-[#0E1624] px-6 py-2 rounded font-medium hover:bg-yellow-400 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;