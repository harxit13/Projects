import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">AlumniConnect</h2>
            <p className="text-blue-200 mb-4">
              Connecting graduates with their alma mater for mentorship, networking, and lifelong learning opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-yellow-300">Home</Link>
              </li>
              <li>
                <Link to="/alumni" className="text-blue-200 hover:text-yellow-300">Alumni Directory</Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-200 hover:text-yellow-300">Events</Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-blue-200 hover:text-yellow-300">Mentorship</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-yellow-300">Alumni Magazine</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-yellow-300">Career Resources</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-yellow-300">Scholarship Programs</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-yellow-300">Donation Opportunities</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-blue-200">123 University Avenue, City, State ZIP</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-blue-200">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:alumni@university.edu" className="text-blue-200 hover:text-yellow-300">
                  alumni@university.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-blue-200">© {currentYear} AlumniConnect. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-yellow-300 mr-4">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-yellow-300 mr-4">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-yellow-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;