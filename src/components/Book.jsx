import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { booksActions, deleteBook } from '../redux/Books/bookSlice';
import style from '../CSS/graphic.module.css';

const Book = ({ item }) => {
  const { title, author } = item;
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(booksActions.removeBook(item.item_id));
    dispatch(deleteBook(item.item_id));
  };
  return (
    <div className="Book-Wrapper">
      <div className="chapter-content update">
        <h3>Current Chapter</h3>
        <p>Chapter 17</p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
      <div className="circle-container">
        <div className={style.circle}>
          <div className={style.progress} />
        </div>
        <div className="content">
          64%
          {' '}
          <br />
          <span className="subtitle">completed</span>
        </div>
      </div>
      <div className="divider" />
      <div className="book-list">
        <h2>{title}</h2>
        <p className="center">
          <span className="author-span">{author}</span>
          <p className="coments">
            <div />
            {' '}
            <a type="submit" className="button-comment" href="/">
              comment
            </a>
            <div className="divider_separator" />
            <button
              className="removebtn"
              type="button"
              onClick={removeBookHandler}
            >
              Remove
            </button>
            <div className="divider_separator_2" />
            <a type="submit" className="button-edit" href="/">
              Edit
            </a>
          </p>
        </p>
      </div>
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
