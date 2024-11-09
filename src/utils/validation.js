export const isEmail = (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  };
  
  export const isString = (value) => {
    if (typeof value !== 'string') {
      return 'This field must be a string';
    }
    return null;
  };
  
  export const isNumber = (value) => {
    if (isNaN(value)) {
      return 'This field must be a number';
    }
    return null;
  };
  
  export const isInt = (value) => {
    if (!Number.isInteger(Number(value))) {
      return 'This field must be an integer';
    }
    return null;
  };
  
  export const isNotEmpty = (value) => {
    return value.trim() === '' ? 'This field cannot be empty' : '';
  };
  
  
  export const isMongoId = (value) => {
    const regex = /^[0-9a-fA-F]{24}$/;
    if (!regex.test(value)) {
      return 'Invalid MongoDB ObjectId';
    }
    return null;
  };
  
  export const matchesRegex = (value, regex, errorMessage) => {
    if (!regex.test(value)) {
      return errorMessage || 'Invalid input';
    }
    return null;
  };
  
  export const isInRange = (value, min, max) => {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue < min || numberValue > max) {
      return `Value must be between ${min} and ${max}`;
    }
    return null;
  };
  