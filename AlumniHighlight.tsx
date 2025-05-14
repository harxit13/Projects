import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

interface AlumniProps {
  alumni: {
    id: string;
    name: string;
    graduationYear: number;
    department: string;
    currentPosition: string;
    achievements: string;
    profileImage: string;
  };
}

const AlumniHighlight: React.FC<AlumniProps> = ({ alumni }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img 
          src={alumni.profileImage} 
          alt={alumni.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">{alumni.name}</h3>
          <p className="text-sm">Class of {alumni.graduationYear}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-700 mb-2">
          <Briefcase size={16} className="mr-2" />
          <span className="font-medium">{alumni.currentPosition}</span>
        </div>
        <p className="text-gray-600 mb-4">{alumni.achievements}</p>
        <Link
          to={`/profile/${alumni.id}`}
          className="inline-block w-full text-center px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default AlumniHighlight;