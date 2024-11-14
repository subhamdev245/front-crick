import React from 'react';

const ImageCard = ({ className, onClick, imageUrl, rounded }) => {
  return (
    <div
      className={`border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out ${rounded} ${className}`}
      onClick={onClick}
    >
      <div className={`overflow-hidden ${rounded} bg-gray-800`}>
        <img
          src={imageUrl || "https://via.placeholder.com/400x200?text=No+Image"}
          alt="Card Image"
          className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72 xl:h-80"
        />
      </div>
    </div>
  );
};

export default ImageCard;
