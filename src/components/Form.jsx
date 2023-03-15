import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/Books/bookSlice';

function Form() {
  const initialValues = {
    title: '',
    author: '',
    category: '',
  };
  const [state, setState] = useState(initialValues);
  const dispatch = useDispatch();
  const booksArray = useSelector((state) => state.book.books);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((book) => ({
      ...book,
      [name]: value,
      item_id: `item${booksArray.length + 1}`,
    }));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleAdd}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Form;
