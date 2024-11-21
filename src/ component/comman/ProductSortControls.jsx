import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortItem, selectSortOrder, setSortItem, setSortOrder } from '../../store/UiSlice';

const ProductSortControls = () => {
  const dispatch = useDispatch();
  const sortItem = useSelector(selectSortItem);
  const sortOrder = useSelector(selectSortOrder);

  const handleSortItemChange = (e) => {
    dispatch(setSortItem(e.target.value));
  };

  const handleSortOrderChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-4">
        <div>
          <label htmlFor="sortItem" className="text-lg">
            Sort by:
            <select
              id="sortItem"
              value={sortItem}
              onChange={handleSortItemChange}
              className="ml-2 px-4 py-2 border rounded-md"
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="sortOrder" className="text-lg">
            Order:
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortOrderChange}
              className="ml-2 px-4 py-2 border rounded-md"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductSortControls;
