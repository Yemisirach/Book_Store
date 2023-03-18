import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/Books/bookSlice';

function Books() {
  const booklists = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <div>
        {booklists.map((item) => (
          <Book key={item.item_id} item={item} />
        ))}
      </div>

      <Form />
    </div>
  );
}

export default Books;
