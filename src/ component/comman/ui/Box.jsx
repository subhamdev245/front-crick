import React from 'react';

const Box = ({ 
  className, 
  onClick, 
  width = '100px', 
  height = '100px', 
  backgroundColor = 'bg-gray-300',  
  rounded = 'rounded-lg',
  margin = 'm-4',  
  children 
}) => {
  return (
    <div
      className={`border shadow-md transition-all duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-xl ${rounded} ${margin} 
                  ${backgroundColor} ${className} flex items-center justify-center`}
      style={{ width: width, height: height }}  // Dynamic width and height
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
