import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Users, Award, Clock } from 'lucide-react';

// Mock data for mentors
const mentorsData = [
  {
    id: '401',
    name: 'Dr. Sarah Johnson',
    graduationYear: 2005,
    department: 'Computer Science',
    position: 'CTO at TechCorp',
    expertise: ['technical-skills', 'career-guidance', 'research'],
    bio: 'With 15+ years in the tech industry, I've led teams at major tech companies and startups. I'm passionate about helping students navigate career paths in tech, especially in AI and machine learning.',
    availability: '5 hours/month',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: '402',
    name: 'Michael Chen',
    graduationYear: 2010,
    department: 'Business Administration',
    position: 'Founder & CEO of GreenStart',
    expertise: ['entrepreneurship', 'career-guidance'],
    bio: 'As a founder who has successfully raised multiple rounds of funding, I enjoy mentoring aspiring entrepreneurs. I can help with business plans, pitching to investors, and startup strategy.',
    availability: '3 hours/month',
    profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    id: '403',
    name: 'Priya Patel',
    graduationYear: 2008,
    department: 'Electrical Engineering',
    position: 'Lead Engineer at SpaceX',
    expertise: ['technical-skills', 'research', 'internships'],
    bio: 'I've worked on cutting-edge aerospace projects and can provide guidance on engineering careers, research opportunities, and securing competitive internships in the industry.',
    availability: '4 hours/month',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
];

const MentorshipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const expertiseOptions = [
    { value: 'technical-skills', label: 'Technical Skills' },
    { value: 'career-guidance', label: 'Career Guidance' },
    { value: 'research', label: 'Research' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' },
    { value: 'internships', label: 'Internships' }
  ];

  const filteredMentors = mentorsData.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExpertise = selectedExpertise.length === 0 ||
      mentor.expertise.some(exp => selectedExpertise.includes(exp));

    return matchesSearch && matchesExpertise;
  });

  const toggleExpertise = (value: string) => {
    setSelectedExpertise(prev =>
      prev.includes(value)
        ? prev.filter(e => e !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Mentorship Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Connect with experienced alumni who can guide you through your academic and professional journey.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Program Overview
            </button>
            <button
              onClick={() => setActiveTab('find')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'find'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Find a Mentor
            </button>
            <button
              onClick={() => setActiveTab('become')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'become'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Become a Mentor
            </button>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About the Mentorship Program
                </h2>
                <p className="text-gray-600 mb-6">
                  Our mentorship program connects experienced alumni with current students
                  and recent graduates who are seeking guidance in their academic and
                  professional journeys.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1">
                        1
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Registration</h4>
                        <p className="text-gray-500">Complete your profile and preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1">
                        2
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Matching</h4>
                        <p className="text-gray-500">Find mentors based on your interests</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1">
                        3
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Connection</h4>
                        <p className="text-gray-500">Start your mentorship journey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">For Mentees</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Career guidance and advice</li>
                      <li>• Industry insights</li>
                      <li>• Networking opportunities</li>
                      <li>• Professional development</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="text-yellow-600" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">For Mentors</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Give back to community</li>
                      <li>• Leadership development</li>
                      <li>• Recognition opportunities</li>
                      <li>• Personal satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={() => setActiveTab('find')}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-l-md hover:bg-blue-700"
                >
                  Find a Mentor
                </button>
                <button
                  onClick={() => setActiveTab('become')}
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-r-md border border-blue-600 hover:bg-blue-50"
                >
                  Become a Mentor
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Find a Mentor Tab */}
        {activeTab === 'find' && (
          <div>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search mentors by name, position, or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>
              </div>

              {showFilters && (
                <div className="bg-white p-4 rounded-md shadow-sm mb-6">
                  <h4 className="font-medium mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertiseOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => toggleExpertise(option.value)}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedExpertise.includes(option.value)
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map(mentor => (
                <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={mentor.profileImage}
                        alt={mentor.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{mentor.name}</h3>
                        <p className="text-gray-600">{mentor.position}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {mentor.expertise.map(exp => (
                          <span
                            key={exp}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                          >
                            {expertiseOptions.find(o => o.value === exp)?.label}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{mentor.bio}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span className="text-sm">{mentor.availability}</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Request Mentorship
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMentors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No mentors found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedExpertise([]);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Become a Mentor Tab */}
        {activeTab === 'become' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Mentor Registration</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Areas of Expertise
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {expertiseOptions.map(option => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability (hours per month)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Professional Bio
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tell potential mentees about your professional experience and what you can offer as a mentor..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mentorship Goals
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="What do you hope to achieve as a mentor? How do you plan to help mentees?"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I agree to the mentor guidelines and code of conduct
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Register as Mentor
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorshipPage;