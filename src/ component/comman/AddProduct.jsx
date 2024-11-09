import React, { useState } from 'react';
import { isNotEmpty, isNumber, isInRange } from '../../utils/validation'; 
import CommonForm from './CommnForm'; 
import { formControlsForAddProduct } from '../../utils/const'; 

const AddProduct = () => {
  const initialFormData = {
    category: '', 
    name: '', 
    description: '', 
    price: '', 
    stock: '',
    mainImage: null,  
    subImages: [] 
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formVisible, setFormVisible] = useState(false);

  const validate = () => {
    const errors = {};
    const validationRules = {
      category: isNotEmpty(formData.category),
      name: isNotEmpty(formData.name),
      description: isNotEmpty(formData.description),
      price: isNumber(formData.price),
      stock: isInRange(formData.stock, 1, 1000),
      mainImage: formData.mainImage ? null : 'Main image is required', 
      subImages: formData.subImages.length > 0 ? null : 'At least one sub-image is required', 
    };

    Object.keys(validationRules).forEach((field) => {
      if (validationRules[field]) errors[field] = validationRules[field];
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log('Product Data Submitted:', formData);
      setFormData(initialFormData);
      setIsSubmitting(false);
      setFormErrors({});
      setFormVisible(false);
    }
  };

  const handleImageChange = (e, field) => {
    const files = e.target.files;
    if (files) {
      if (field === 'mainImage') {
        setFormData({ ...formData, mainImage: files[0] });
      } else if (field === 'subImages') {
        setFormData({ ...formData, subImages: Array.from(files) });
      }
    }
  };

  const openForm = () => {
    setFormVisible(true);
    setFormData(initialFormData);
    setFormErrors({});
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={openForm}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add Product
      </button>

      {formVisible && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 mt-4">
          <h2 className="text-2xl font-medium text-gray-800 text-center mb-4">Product Details</h2>

          {Object.keys(formErrors).length > 0 && (
            <div className="text-red-500 text-center mb-4">
              Please fix the errors above
            </div>
          )}

          <CommonForm
            formControls={formControlsForAddProduct.map((control) => ({
              ...control,
              error: formErrors[control.name]
            }))}
            buttonText={isSubmitting ? "Adding Product..." : "Add Product"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            isBtnDisabled={isSubmitting}
            handleImageChange={handleImageChange}
          />

          <button
            onClick={() => setFormVisible(false)}
            className="text-gray-600 hover:text-gray-800 mt-4"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
