import React from 'react';
import { Link, useLocation } from 'react-router-dom';


import { FaTachometerAlt, FaBoxes, FaClipboardList, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { adminSidebarNav } from '../../utils/const';

const Sidebar = () => {
    // const location = useLocation();
  
    // Assigning icons to each sidebar item
    const sidebarIcons = {
      dashboard: <FaTachometerAlt />,
      products: <FaBoxes />,
      orders: <FaClipboardList />,
      users: <FaUsers />,
      players : <FaUsers />,
      logout: <FaSignOutAlt />,
    };
  
    return (
      <div className="sidebar bg-gray-800 text-white w-64 h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-4">
          {adminSidebarNav.map((item, index) => {
            const isActive = location.pathname === item.slug;
  
            return (
              <li key={index}>
                <span
                  to={item.slug}
                  className={`flex items-center space-x-2 p-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors`}
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
  