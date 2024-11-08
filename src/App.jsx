import React, { useEffect, useState } from "react";
import Navbar from "./ component/comman/Navbar";
import Sidebar from "./ component/comman/Sidebar";
import ImageCard from "./ component/comman/ui/ImageCard";
import CommonForm from "./ component/comman/CommnForm";
import { defaultValues, formControlsForLogIn } from "./utils/const";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form Data Submitted:', formData);
    setFormData({
      email: "",
      password: "",
    })
  }
  
  return (
    <>
      <Navbar />
      <div className="flex">
        <ImageCard
          className="max-w-sm mx-auto"
          onClick={() => alert("Card clicked!")}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwWnOmv6F43UgGkbZSO7FAncFAxXhJLUjfw&s"
          rounded="rounded-full" // Medium rounded corners
        />
        <CommonForm
        formControls={formControlsForLogIn}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      </div>
    </>
  );
};

export default App;
