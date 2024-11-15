import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategories, selectCategoryError, selectCategoryLoading } from "../../store/CategorySlice";
import { Link } from 'react-router-dom'; 
import ProductCardByCateogy from './ProductCardByCateogy'; 

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
        <div className="container mx-auto p-6 bg-white">
            <h1 className="text-4xl font-semibold text-center mb-8">Shop by Category</h1>
            <div className="flex flex-col gap-8">
                {allCategories?.map((category) => (
                    <div
                        key={category._id}
                        className="category-card p-6 rounded-lg cursor-pointer transition duration-200"
                    >
                        <div >
                            <h3 className="text-2xl font-semibold text-gray-800 text-left  mb-4 " >
                                Shop by {category.name}
                            </h3>
                        </div>
                        <ProductCardByCateogy categoryId={category._id} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
