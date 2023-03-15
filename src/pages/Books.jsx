import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

function Books() {
  const booklists = useSelector((state) => state.book.books);
  return (
    <div>
      <div>
        {booklists.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default Books;
