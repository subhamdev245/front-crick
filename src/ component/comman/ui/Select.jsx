import React from 'react';

const Select = ({ label, name, value, onChange, options, error, className }) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`p-3 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
