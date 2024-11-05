import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../comman/ui/Sidebar';

const AdminHome = () => {
    return (
      <div className="admin-home flex">
        <Sidebar />
        <div className="main-content flex-1 p-4">
          <Outlet /> 
        </div>
      </div>
    );
  };
  
  export default AdminHome;