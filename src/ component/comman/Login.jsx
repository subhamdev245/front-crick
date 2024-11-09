import React, { useState, useEffect } from 'react';
import CommonForm from './CommnForm';
import { formControlsForLogIn } from '../../utils/const';
import { isEmail, isNotEmpty } from '../../utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthLoading, selectAuthError,  selectIsAuthenticated } from '../../store/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const isLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError); 
  const loginSuccess = useSelector(selectIsAuthenticated);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form validation
  const validate = () => {
    let errors = {};

    const emailError = isEmail(formData.email);
    if (emailError) errors.email = emailError;

    const passwordError = isNotEmpty(formData.password);
    if (passwordError) errors.password = passwordError;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
       dispatch(login(formData));
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigate]);

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
            <h2 className="text-2xl font-medium text-gray-800 text-center mb-4">Sign In</h2>

            {authError && (
              <div className="text-red-500 text-center mb-4">{authError}</div> // Show authError if it exists
            )}

            {formErrors.email && (
              <div className="text-red-500 text-center mb-4">{formErrors.email}</div>
            )}

            {formErrors.password && (
              <div className="text-red-500 text-center mb-4">{formErrors.password}</div>
            )}

            <CommonForm
              formControls={formControlsForLogIn}
              buttonText={isLoading ? "Signing In..." : "Sign In"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              isBtnDisabled={isLoading || isSubmitting}
            />
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Create one here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
