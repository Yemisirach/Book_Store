// eslint-disable missing in props validation
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/bookSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {author}
        <button type="button" onClick={() => dispatch(removeBook(id))}>
          Remove
        </button>
      </p>
    </div>
  );
}

export default Book;
