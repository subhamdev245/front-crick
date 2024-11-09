import React, { useState, useEffect } from 'react';
import { formControlsForRegister } from '../../utils/const';
import { isEmail, isNotEmpty } from '../../utils/validation';
import CommonForm from './CommnForm';
import { useDispatch, useSelector } from 'react-redux';
import { register, selectAuthLoading, selectAuthError, selectRegisterSuccess } from '../../store/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const isLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const registerSuccess = useSelector(selectRegisterSuccess);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};

    const nameError = isNotEmpty(formData.name);
    if (nameError) errors.name = nameError;

    const emailError = isEmail(formData.email);
    if (emailError) errors.email = emailError;

    const passwordError = isNotEmpty(formData.password);
    if (passwordError) errors.password = passwordError;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      await dispatch(register(formData));
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  useEffect(() => {
    if (registerSuccess) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [registerSuccess, navigate]);

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

            {authError && (
              <div className="text-red-500 text-center mb-4">{authError}</div>
            )}

            {formErrors.name && (
              <div className="text-red-500 text-center mb-4">{formErrors.name}</div>
            )}

            {formErrors.email && (
              <div className="text-red-500 text-center mb-4">{formErrors.email}</div>
            )}

            {formErrors.password && (
              <div className="text-red-500 text-center mb-4">{formErrors.password}</div>
            )}

            {registerSuccess && (
              <div className="text-green-500 text-center mb-4">Registration successful! Redirecting to login...</div>
            )}

            <CommonForm
              formControls={formControlsForRegister}
              buttonText={isLoading ? "Registering..." : "Sign Up"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              isBtnDisabled={isLoading}
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
