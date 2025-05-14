import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
  };
}

const EventCard: React.FC<EventProps> = ({ event }) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 text-blue-600" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2 text-blue-600" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2 text-blue-600" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex justify-between items-center">
          <Link
            to={`/events/${event.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Event Details
          </Link>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;