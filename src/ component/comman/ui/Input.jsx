import React, { forwardRef } from 'react';

const Input = forwardRef(
  ({ label, type = 'text', name, value, onChange, placeholder, error, className, ...props }, ref) => {
    return (
      <div className={`flex flex-col space-y-1 ${className}`}>
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange || (() => {})} // Default onChange if not passed
          placeholder={placeholder}
          className={`p-3 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
          ref={ref} // Forwarding the ref here
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

export default Input;
