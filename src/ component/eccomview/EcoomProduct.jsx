import React, { useState } from 'react';
import Filter from '../comman/ui/Filter';
import Products from '../comman/Products';

const EcoomProduct = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setPage(newPage);  // Update page if newPage is greater than 0
    }
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          <div className="md:col-span-1 lg:col-span-3 w-full">
            <Filter />
          </div>
          <div className="md:col-span-2 lg:col-span-9 w-full">
            <Products page={page} /> 
          </div>
        </div>
      </div>

      
    </>
  );
};

export default EcoomProduct;
