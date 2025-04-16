
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe className="w-8 h-8 text-travel" />
              <span className="font-semibold text-xl tracking-tight">Journey<span className="text-travel">Gen</span></span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Your AI-powered travel companion that learns your preferences and creates personalized travel experiences just for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-travel transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-travel transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Destinations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Popular</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Adventure</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Beach</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">City</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Countryside</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Travel Types</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Solo Travel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Family</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Couples</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Luxury</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Budget</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-travel transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 JourneyGen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-travel text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-travel text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-travel text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
