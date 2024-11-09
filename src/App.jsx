import React, { useEffect, useState } from "react";
import Navbar from "./ component/comman/Navbar";
import Sidebar from "./ component/comman/Sidebar";
import ImageCard from "./ component/comman/ui/ImageCard";
import CommonForm from "./ component/comman/CommnForm";
import Login from "./ component/comman/Login";
import Register from "./ component/comman/Register";
import AddProduct from "./ component/comman/AddProduct";
import { Outlet } from "react-router-dom";


const App = () => {
  
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
