import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { adminSidebarNav } from '../../utils/const'; 
import { FaTachometerAlt, FaBoxes, FaClipboardList, FaUsers, FaFutbol, FaSignOutAlt  } from 'react-icons/fa'; // Added FaFutbol for player management icon
import { GrUserManager } from "react-icons/gr";
const Sidebar = () => {
  // const location = useLocation(); 

  // Assigning icons to each sidebar item
  const sidebarIcons = {
    dashboard: <FaTachometerAlt />,
    products: <FaBoxes />,
    orders: <FaClipboardList />,
    users: <FaUsers />,
    players: <GrUserManager />, 
    logout: <FaSignOutAlt />,
  };

  return (
    <div className="sidebar bg-gradient-to-r from-black to-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>
      <ul className="space-y-4">
        {adminSidebarNav.map((item, index) => {
          const isActive = location.pathname === item.slug;

          return (
            <li key={index}>
              <span
                to={item.slug}
                className={`flex items-center space-x-3 p-3 rounded-md 
                ${isActive ? 'bg-indigo-700' : 'hover:bg-gray-700'} 
                transition-colors duration-200 ease-in-out`}
              >
                
                <span className="text-xl">{sidebarIcons[item.name.toLowerCase()]}</span>
                <span>{item.name}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
