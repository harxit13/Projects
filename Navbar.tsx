import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">AlumniConnect</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-yellow-300">Home</Link>
              <Link to="/alumni" className="px-3 py-2 text-sm font-medium hover:text-yellow-300">Alumni Directory</Link>
              <Link to="/events" className="px-3 py-2 text-sm font-medium hover:text-yellow-300">Events</Link>
              <Link to="/mentorship" className="px-3 py-2 text-sm font-medium hover:text-yellow-300">Mentorship</Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            {currentUser ? (
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <span className="mr-2">{currentUser.name}</span>
                    {currentUser.profileImage ? (
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={currentUser.profileImage}
                        alt={currentUser.name}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                        <User size={16} />
                      </div>
                    )}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link
                      to={`/profile/${currentUser.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="px-4 py-2 text-sm font-medium rounded-md bg-blue-800 hover:bg-blue-700 transition-colors">
                  Log in
                </Link>
                <Link to="/register" className="px-4 py-2 text-sm font-medium rounded-md bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-colors">
                  Sign up
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium hover:text-yellow-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/alumni" className="block px-3 py-2 text-base font-medium hover:text-yellow-300" onClick={toggleMenu}>
              Alumni Directory
            </Link>
            <Link to="/events" className="block px-3 py-2 text-base font-medium hover:text-yellow-300" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/mentorship" className="block px-3 py-2 text-base font-medium hover:text-yellow-300" onClick={toggleMenu}>
              Mentorship
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-800">
            {currentUser ? (
              <>
                <div className="flex items-center px-5">
                  {currentUser.profileImage ? (
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={currentUser.profileImage}
                      alt={currentUser.name}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                      <User size={20} />
                    </div>
                  )}
                  <div className="ml-3">
                    <div className="text-base font-medium">{currentUser.name}</div>
                    <div className="text-sm font-medium text-blue-200">{currentUser.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link
                    to={`/profile/${currentUser.id}`}
                    className="block px-3 py-2 text-base font-medium hover:text-yellow-300"
                    onClick={toggleMenu}
                  >
                    Your Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium hover:text-yellow-300"
                  >
                    <div className="flex items-center">
                      <LogOut size={16} className="mr-2" />
                      Sign out
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-3 px-2 space-y-1">
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium hover:text-yellow-300"
                  onClick={toggleMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-base font-medium bg-yellow-500 text-blue-900 rounded-md"
                  onClick={toggleMenu}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;