import React, { useState } from 'react';
import { isNotEmpty, isNumber, isInRange } from '../../utils/validation';
import CommonForm from './CommonForm';
import { formControlsForAddProduct } from '../../utils/const';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    description: '',
    price: '',
    stock: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [formVisible, setFormVisible] = useState(false);

  const validate = () => {
    let errors = {};

    const categoryError = isNotEmpty(formData.category);
    if (categoryError) errors.category = categoryError;

    const nameError = isNotEmpty(formData.name);
    if (nameError) errors.name = nameError;

    const descriptionError = isNotEmpty(formData.description);
    if (descriptionError) errors.description = descriptionError;

    const priceError = isNumber(formData.price);
    if (priceError) errors.price = priceError;

    const stockError = isInRange(formData.stock, 1, 1000);
    if (stockError) errors.stock = stockError;

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
    console.log('Product Data Submitted:', formData);
  };

  const handleAddProductClick = () => {
    setFormVisible(true);
  };

  const handleCancelClick = () => {
    setFormVisible(false);
  };

  const updatedFormControls = formControlsForAddProduct.map((control) => {
    return {
      ...control,
      error: formErrors[control.name],
    };
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 text-center text-white">
        <div>
          <h1 className="text-4xl font-semibold mb-4">Add a New Product</h1>
          <p className="text-lg">
            Fill in the details to add a new product to the store.
          </p>
          {!formVisible && (
            <button
              onClick={handleAddProductClick}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Product
            </button>
          )}
        </div>
      </div>

      <div className={`w-full md:w-1/2 flex justify-center items-center p-8 ${formVisible ? 'block' : 'hidden'}`}>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-medium text-gray-800 text-center mb-4">Product Details</h2>

            {errorMessage && (
              <div className="text-red-500 text-center mb-4">{errorMessage}</div>
            )}

            {formErrors.category && (
              <div className="text-red-500 text-center mb-4">{formErrors.category}</div>
            )}

            {formErrors.name && (
              <div className="text-red-500 text-center mb-4">{formErrors.name}</div>
            )}

            {formErrors.description && (
              <div className="text-red-500 text-center mb-4">{formErrors.description}</div>
            )}

            {formErrors.price && (
              <div className="text-red-500 text-center mb-4">{formErrors.price}</div>
            )}

            {formErrors.stock && (
              <div className="text-red-500 text-center mb-4">{formErrors.stock}</div>
            )}

            <CommonForm
              formControls={updatedFormControls}
              buttonText={isSubmitting ? "Adding Product..." : "Add Product"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              isBtnDisabled={isSubmitting}
            />

            <div className="text-center mt-4">
              <button
                onClick={handleCancelClick}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
