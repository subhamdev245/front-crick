import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBoxes, FaClipboardList, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { navbarNav } from '../../utils/const';

const Navbar = () => {
  // const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const user = true;
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filterList = user
    ? navbarNav  
    : navbarNav.filter(item => item.name === 'Home' || item.name === 'Login' || item.name === 'Register'); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span>PlayVerse</span>
        </div>
        {/* Search Box */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Products..."
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <ul className="hidden md:flex space-x-6">
          {navbarNav.map((item, index) => {
            const isActive = location.pathname === item.slug;

            return (
              <li key={index}>
                <span
                  className={`flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors`}
                >
                  <span>{filterList[index]?.name}</span>
                  
                </span>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <ul className="space-y-4 py-4 text-center">
          {navbarNav.map((item, index) => {
            const isActive = location.pathname === item.slug;

            return (
              <li key={index}>
                <button
                  className={`flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-600 cursor-pointer'} transition-colors w-full`}
                >
                  <span>{filterList[index]?.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
