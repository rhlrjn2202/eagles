import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0E1624] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
                <img
                  src="/images/eagle-logo.png"
                  alt="Eagles Cricket Club"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-white">EAGLES</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm">Soaring High, Playing Strong</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Programs', 'Team', 'Matches', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2">
              {[
                'Junior Development',
                'Professional Training',
                'Weekend Academy',
                'Summer Camps',
                'Private Coaching'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-sm">contact@eaglescc.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-sm">+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-sm">123 Sports Avenue, Cricket City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="px-4 py-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Eagles Cricket Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;