import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, selectCategoryError, selectCategoryLoading } from '../../../store/CategorySlice';
import { selectCategoryId, setCategoryId } from '../../../store/UiSlice';

const Filter = () => {
  const selectedCategoryId = useSelector(selectCategoryId); 
  const dispatch = useDispatch(); 

  const handleCheckboxChange = (checkboxId) => {
    if (selectedCategoryId === checkboxId) {
      dispatch(setCategoryId(null)); 
    } else {
      dispatch(setCategoryId(checkboxId)); 
      
      
    }
  };

  const categories = useSelector(selectCategories);
  const error = useSelector(selectCategoryError);
  const isLoading = useSelector(selectCategoryLoading);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!categories?.data?.length) {
    return <div className="text-center text-gray-500">No categories available</div>;
  }

  const allCategories = categories?.data;

  return (
    <div className="p-4">
      {allCategories.map((category) => (
        <div
          key={category._id}
          className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded transition duration-300 ease-in-out"
        >
          
          <input
            type="checkbox"
            id={category._id}
            name={category.name}
            checked={selectedCategoryId === category._id} 
            onChange={() => handleCheckboxChange(category._id)} 
            className="transition duration-300 ease-in-out transform scale-110"
          />
          <div className="text-lg">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
