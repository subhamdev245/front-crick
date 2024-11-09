import React, { useState } from 'react';

import { formControlsForRegister } from '../../utils/const';
import { isEmail, isNotEmpty } from '../../utils/validation';
import CommonForm from './CommnForm';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    let errors = {};

    const emailError = isEmail(formData.email);
    if (emailError) errors.email = emailError;

    const passwordError = isNotEmpty(formData.password);
    if (passwordError) errors.password = passwordError;

    const usernameError = isNotEmpty(formData.username);
    if (usernameError) errors.username = usernameError;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      setErrorMessage('Please fix the errors above');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 text-center text-white">
        <div>
          <h1 className="text-4xl font-semibold mb-4">Welcome to Playverse</h1>
          <p className="text-lg">
            Your one-stop shop for everything sports. <br />
            Get products player-wise and enhance your game!
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-medium text-gray-800 text-center mb-4">Create an Account</h2>

            {errorMessage && (
              <div className="text-red-500 text-center mb-4">{errorMessage}</div>
            )}

            {formErrors.username && (
              <div className="text-red-500 text-center mb-4">{formErrors.username}</div>
            )}

            {formErrors.email && (
              <div className="text-red-500 text-center mb-4">{formErrors.email}</div>
            )}

            {formErrors.password && (
              <div className="text-red-500 text-center mb-4">{formErrors.password}</div>
            )}

            <CommonForm
              formControls={formControlsForRegister}
              buttonText={isSubmitting ? "Registering..." : "Sign Up"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              isBtnDisabled={isSubmitting}
            />
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign In here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
