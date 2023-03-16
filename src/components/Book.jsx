import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { deleteBook } from "./Api";
import { booksActions, deleteBook } from '../redux/Books/bookSlice';

const Book = ({ item }) => {
  const { title, author } = item;
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(booksActions.removeBook(item.item_id));
    dispatch(deleteBook(item.item_id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {author}
        <button type="button" onClick={removeBookHandler}>
          Remove
        </button>
      </p>
    </div>
  );
};
Book.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
