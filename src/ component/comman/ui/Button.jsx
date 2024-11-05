import React from 'react';

const Button = ({ type = 'button', onClick, children, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-6 bg-blue-600 text-white rounded-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
