import React from "react";
import Navbar from "./ component/comman/Navbar";
import Sidebar from "./ component/comman/Sidebar";
import ImageCard from "./ component/comman/ui/ImageCard";

const App = () => {
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
        
      </div>
    </>
  );
};

export default App;
