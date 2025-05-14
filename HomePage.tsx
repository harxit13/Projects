import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CalendarDays, BookOpen, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AlumniHighlight from '../components/alumni/AlumniHighlight';
import EventCard from '../components/events/EventCard';

// Demo data
const featuredAlumni = [
  {
    id: '101',
    name: 'Dr. Sarah Johnson',
    graduationYear: 2005,
    department: 'Computer Science',
    currentPosition: 'CTO at TechCorp',
    achievements: 'Led development of breakthrough AI system, 3x patent holder',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: '102',
    name: 'Michael Chen',
    graduationYear: 2010,
    department: 'Business Administration',
    currentPosition: 'Founder & CEO of GreenStart',
    achievements: 'Forbes 30 Under 30, raised $50M in venture capital',
    profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    id: '103',
    name: 'Priya Patel',
    graduationYear: 2008,
    department: 'Electrical Engineering',
    currentPosition: 'Lead Engineer at SpaceX',
    achievements: 'NASA Innovation Award, Lead engineer on Mars rover project',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
];

const upcomingEvents = [
  {
    id: '201',
    title: 'Annual Alumni Gala',
    date: '2025-06-15',
    time: '18:00',
    location: 'Grand Hotel Ballroom',
    description: 'Join us for an evening of celebration and networking with fellow alumni.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg'
  },
  {
    id: '202',
    title: 'Tech Industry Panel',
    date: '2025-07-10',
    time: '14:00',
    location: 'Virtual Event',
    description: 'Hear from our successful alumni in the tech industry about current trends and career opportunities.',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg'
  }
];

const HomePage: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reconnect, Inspire, and Give Back to Your Alma Mater
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Join our alumni network to stay connected, mentor students, and participate in exclusive events.
            </p>
            <div className="flex flex-wrap gap-4">
              {!currentUser ? (
                <>
                  <Link
                    to="/register"
                    className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors shadow-md"
                  >
                    Join Network
                  </Link>
                  <Link
                    to="/login"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/mentorship"
                    className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors shadow-md"
                  >
                    Become a Mentor
                  </Link>
                  <Link
                    to="/events"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    Browse Events
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Alumni Network?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform offers multiple ways to stay connected and give back to your alma mater.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Network</h3>
              <p className="text-gray-600">
                Connect with fellow alumni across different industries and locations.
              </p>
            </div>
            
            <div className="p-6 bg-yellow-50 rounded-lg transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-yellow-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mentor</h3>
              <p className="text-gray-600">
                Share your expertise and guide current students in their career journeys.
              </p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CalendarDays className="text-green-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Events</h3>
              <p className="text-gray-600">
                Stay informed about and participate in exclusive alumni events and reunions.
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Recognize</h3>
              <p className="text-gray-600">
                Celebrate accomplishments and contributions of distinguished alumni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Alumni</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of our exceptional graduates who are making an impact in their fields.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni) => (
              <AlumniHighlight key={alumni.id} alumni={alumni} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/alumni"
              className="inline-flex items-center px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded-md hover:bg-blue-800 hover:text-white transition-colors"
            >
              View All Alumni
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us at these upcoming events to network, learn, and reconnect with your alma mater.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded-md hover:bg-blue-800 hover:text-white transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Reconnect?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join thousands of fellow alumni who are already part of our growing network.
          </p>
          {!currentUser ? (
            <Link
              to="/register"
              className="inline-block px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors shadow-md"
            >
              Join Us Today
            </Link>
          ) : (
            <Link
              to="/profile/edit"
              className="inline-block px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors shadow-md"
            >
              Update Your Profile
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;