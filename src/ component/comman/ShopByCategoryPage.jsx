import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategories, selectCategoryError, selectCategoryLoading } from "../../store/CategorySlice";
import { Link } from 'react-router-dom'; 
 

const CategoriesPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoryLoading);
    const error = useSelector(selectCategoryError);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

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
        <div className="container mx-auto p-6 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Shop by Category</h1>
            
            <div className="flex flex-wrap gap-8 justify-center">
                {allCategories?.map((category) => (
                    <div
                        key={category._id}
                        className="category-card p-6 rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 bg-[#2B2B52] shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:shadow-xl"
                    >
                        <h3 className="text-2xl font-semibold text-white text-center mb-4">
                            {category.name}
                        </h3>
                        <p className="text-center text-white opacity-75 mb-4">
                            Explore our {category.name} collection
                        </p>
                        <Link 
                            to={`/category/${category._id}`} 
                            className="block text-center mt-4 px-4 py-2 border-2 border-white text-white rounded-full transition duration-300 hover:bg-white hover:text-indigo-500"
                        >
                            Shop Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
