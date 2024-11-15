import React from "react";
import ProductCardByCategory from "./ProductCardByCateogy";

const ProductCard = ({ product }) => {
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={
            product.mainImage?.[0] ||
            "https://via.placeholder.com/400x200?text=No+Image"
          }
          alt={product.name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl">{product.name}</h2>
        <p className="text-lg font-bold text-white">{`$${product.price}`}</p>
      </div>
    </div>
    
    </>
  );
};

export default ProductCard;
