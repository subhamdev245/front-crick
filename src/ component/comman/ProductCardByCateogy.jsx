import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductCardByCategory = ({ categoryId, productId }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8097/api/v1/product/get-products/${categoryId}`
        );
        setProducts(response.data.data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!products.length) {
    return <div className="text-center text-gray-500">No products found</div>;
  }

  // Filter out the product that matches the productId
  const filteredProducts = products.filter(product => product._id !== productId);

  return (
    <div className="rounded-box h-96 flex flex-row gap-4 overflow-x-auto">
      {filteredProducts.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id} className="h-full flex-shrink-0">
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductCardByCategory;
