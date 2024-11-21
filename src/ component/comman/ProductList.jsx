import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProductError, selectProductLoading, selectProducts } from '../../store/ProductSlice';
import { selectCategoryId, selectSortItem, selectSortOrder } from '../../store/UiSlice';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const sortItem = useSelector(selectSortItem);
  const sortOrder = useSelector(selectSortOrder);
  const categoryId = useSelector(selectCategoryId);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    dispatch(fetchProducts({ sortItem, sortOrder, categoryId, page, limit }));
  }, [dispatch, sortItem, sortOrder, categoryId, page, limit]);

  const productsData = products?.data?.Products || [];
  const hasmore = products?.data?.hasmore || false;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsData.map((product) => (
          <Link className='flex gap-4 ' key={product._id} to={`/product/${product._id}`} >
            <ProductCard  product={product} />
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!hasmore}
          className={`px-4 py-2 rounded-md ${!hasmore ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
