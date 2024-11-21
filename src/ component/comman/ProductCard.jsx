import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={
            product.mainImage?.[0] ||
            "https://via.placeholder.com/400x200?text=No+Image"
          }
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{`$${product.price}`}</p>
        
      </div>
    </div>
  );
};

export default ProductCard;
