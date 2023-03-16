import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { postBook } from "./Api";
import { v4 as uuidv4 } from 'uuid';
import { booksActions, postBook } from '../redux/Books/bookSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category: 'psychology',
    };

    dispatch(booksActions.addBook(bookData));
    dispatch(postBook(bookData));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <form action="#" method="post">
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          onChange={titleChangeHandler}
          required
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          onChange={authorChangeHandler}
          required
        />

        <button type="submit" onClick={submitHandler}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
