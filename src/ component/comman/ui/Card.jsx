import React from 'react';

const Card = ({ children, className, onClick }) => {
  return (
    <div
      className={`border rounded-lg shadow-lg hover:shadow-2xl transition duration-200 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
