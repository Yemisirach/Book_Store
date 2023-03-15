import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories(id) {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" onClick={() => dispatch(checkStatus(id))}>
        Check Status
      </button>
      <p>{status}</p>
    </div>
  );
}

export default Categories;
