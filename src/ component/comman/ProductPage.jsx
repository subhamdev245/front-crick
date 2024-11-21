import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProduct, selectProductError, selectProductLoading } from '../../store/ProductSlice';
import { selectIsAuthenticated } from '../../store/AuthSlice';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ProductCardByCategory from './ProductCardByCateogy';
import CategoriesPage from './ShopByCategoryPage';
import { selectCategories } from '../../store/CategorySlice';
const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProduct);
  const isLoading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [selectedImage, setSelectedImage] = useState(null);
  const category = useSelector(selectCategories)  
  console.log(category);
  
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const product = productDetails?.data;
  
  
  
  useEffect(() => {
    if (product && product.mainImage?.length > 0) {
      setSelectedImage(product.mainImage[0]); // Default to the first image
    }
  }, [product]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  return (
    <>
    
    <div className="p-6 max-w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Left side (Images) */}
        <div className="flex flex-col items-center space-y-4">
          {/* Side Images */}
          <div className="flex space-x-4 overflow-x-auto">
            {product.subImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`side-image-${index}`}
                className="w-16 h-16 object-contain rounded-lg cursor-pointer border border-gray-300 hover:border-blue-500 transition-all duration-300"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          {/* Main Image */}
          <img
            src={selectedImage || product.mainImage?.[0]} // Fallback to first image if none selected
            alt={product.name}
            className="w-full h-96 object-contain rounded-lg"
          />
        </div>

        {/* Right side (Product Details) */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-semibold text-white-800 text-center">{product.name}</h1>
          <p className="text-xl font-bold text-white-900 text-center">{`$${product.price}`}</p>
          <p className="text-white-700 text-center">{product.description}</p>

          {/* Conditional Buttons (if authenticated) */}
          {isAuthenticated ? (
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0 mt-4">
              <button
                className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button
                className="flex items-center justify-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 w-full md:w-auto"
              >
                <FaHeart className="mr-2" /> Add to Wishlist
              </button>
            </div>
          ) : (
            <p className="text-md text-white-700 mt-4 text-center">
              Please log in to add to cart or wishlist.
            </p>
          )}
        </div>
      </div>
    </div>
    <div>
       <div className='text-2xl font-bold text-center mt-2 '>
        Realted Products
       </div>
       <div className='carousel carousel-center rounded-box'>
       {
        
        product.category?.map((categoryId) => {
          return (
            <div key={`related-product-${categoryId}`} className='carousel-item'>
              <ProductCardByCategory  categoryId={categoryId} productId={productId} />
            </div>
            
          )
        })
       }
      </div> 
    </div>
    </>
  );
};

export default ProductPage;
