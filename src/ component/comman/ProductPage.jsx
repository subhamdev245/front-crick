import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProduct, selectProductError, selectProductLoading } from '../../store/ProductSlice';
import { selectIsAuthenticated } from '../../store/AuthSlice';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductPage = ({ productId }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProduct);
  const isLoading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
   
  const product = productDetails.data
   

  useEffect(() => {
    // Set initial image if product.mainImage exists
    if (product && product.mainImage?.length > 0) {
      setSelectedImage(product.mainImage[0]); // Use the first main image as the default
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
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-xl rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Side Images */}
          <div className="flex space-x-4 overflow-x-auto">
            {product.subImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`side-image-${index}`}
                className="w-16 h-16 object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-blue-500 transition-all duration-300"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          {/* Main Image */}
          <img
            src={selectedImage || product.mainImage?.[0]} // Safely access mainImage
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-xl font-bold text-gray-900">{`$${product.price}`}</p>
          <p className="text-gray-700">{product.description}</p>
          
          {isAuthenticated ? (
            <div className="flex space-x-4 mt-4">
              <button
                className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button
                className="flex items-center justify-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <FaHeart className="mr-2" /> Add to Wishlist
              </button>
            </div>
          ) : (
            <p className="text-sm text-gray-500 mt-4">
              Please log in to add to cart or wishlist.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
