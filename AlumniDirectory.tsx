import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Briefcase } from 'lucide-react';

// Mock data
const alumniData = [
  {
    id: '101',
    name: 'Dr. Sarah Johnson',
    graduationYear: 2005,
    department: 'Computer Science',
    location: 'San Francisco, CA',
    currentPosition: 'CTO at TechCorp',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: '102',
    name: 'Michael Chen',
    graduationYear: 2010,
    department: 'Business Administration',
    location: 'New York, NY',
    currentPosition: 'Founder & CEO of GreenStart',
    profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    id: '103',
    name: 'Priya Patel',
    graduationYear: 2008,
    department: 'Electrical Engineering',
    location: 'Austin, TX',
    currentPosition: 'Lead Engineer at SpaceX',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: '104',
    name: 'James Wilson',
    graduationYear: 2015,
    department: 'Marketing',
    location: 'Chicago, IL',
    currentPosition: 'Marketing Director at Consumer Brands',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: '105',
    name: 'Elena Rodriguez',
    graduationYear: 2012,
    department: 'Biomedical Engineering',
    location: 'Boston, MA',
    currentPosition: 'Research Scientist at Pharma Inc.',
    profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: '106',
    name: 'David Kim',
    graduationYear: 2007,
    department: 'Finance',
    location: 'Seattle, WA',
    currentPosition: 'Investment Banker at Global Finance',
    profileImage: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
  }
];

// Available filter options
const departments = ['All Departments', 'Computer Science', 'Business Administration', 'Electrical Engineering', 'Marketing', 'Biomedical Engineering', 'Finance'];
const graduationYears = ['All Years', '2005-2010', '2011-2015', '2016-2020', '2021-Present'];
const locations = ['All Locations', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Chicago, IL', 'Boston, MA', 'Seattle, WA'];

const AlumniDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFilters, setShowFilters] = useState(false);

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      alumni.currentPosition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All Departments' || alumni.department === selectedDepartment;
    
    let matchesYear = true;
    if (selectedYear !== 'All Years') {
      const [start, end] = selectedYear.split('-').map(year => parseInt(year));
      if (end) {
        matchesYear = alumni.graduationYear >= start && alumni.graduationYear <= end;
      } else {
        // For "2021-Present" case
        matchesYear = alumni.graduationYear >= 2021;
      }
    }
    
    const matchesLocation = selectedLocation === 'All Locations' || alumni.location === selectedLocation;
    
    return matchesSearch && matchesDepartment && matchesYear && matchesLocation;
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('All Departments');
    setSelectedYear('All Years');
    setSelectedLocation('All Locations');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alumni Directory</h1>
          <p className="text-lg text-gray-600">
            Connect with fellow alumni from around the world.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or position..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={toggleFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <Filter size={16} className="mr-2" />
              Filters {showFilters ? '▲' : '▼'}
            </button>
            {(selectedDepartment !== 'All Departments' || selectedYear !== 'All Years' || selectedLocation !== 'All Locations') && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              >
                Reset Filters
              </button>
            )}
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="department-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  id="department-filter"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Graduation Year
                </label>
                <select
                  id="year-filter"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                >
                  {graduationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="location-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  id="location-filter"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              {filteredAlumni.length} Alumni Found
            </h2>
          </div>
          
          {filteredAlumni.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filteredAlumni.map((alumni) => (
                <li key={alumni.id} className="p-6 hover:bg-blue-50 transition-colors">
                  <Link to={`/profile/${alumni.id}`} className="flex flex-col md:flex-row md:items-center">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <img
                        src={alumni.profileImage}
                        alt={alumni.name}
                        className="h-24 w-24 rounded-full object-cover border-2 border-blue-100"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{alumni.name}</h3>
                      <p className="text-blue-700 font-medium mb-2">Class of {alumni.graduationYear} • {alumni.department}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 gap-y-2 sm:gap-x-4">
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          <span>{alumni.currentPosition}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          <span>{alumni.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        View Profile
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-8 text-center">
              <p className="text-lg text-gray-500">No alumni found matching your criteria.</p>
              <button
                onClick={resetFilters}
                className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;