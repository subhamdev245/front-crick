import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchCategories,
  selectCategories,
  selectCategoryError,
  selectCategoryLoading,
} from "../../store/CategorySlice";
import Box from "./ui/Box";
import { setCategoryId } from "../../store/UiSlice";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoryLoading);
  const error = useSelector(selectCategoryError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    dispatch(setCategoryId(categoryId));
    navigate("/products");
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!categories?.data?.length) {
    return (
      <div className="text-center text-gray-500">No categories available</div>
    );
  }

  const allCategories = categories?.data;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Shop by Category
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allCategories?.map((category) => (
          <div key={category._id} className="w-full">
            <Box
              width="100%"
              height="100px"
              rounded="rounded-lg"
              margin="m-4"
              className="bg-[#DBEAFE] "
              onClick={() => handleCategoryClick(category._id)}
            >
              <div
                className="flex justify-center items-center h-full text-black text-lg font-semibold overflow-hidden"
                title={category?.name}
              >
                <span className="truncate text-black">{category?.name}</span>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
