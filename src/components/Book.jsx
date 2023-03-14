import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <table>
        <tr>
          <li>{title}</li>
          <li>{author}</li>
          <button type="submit">Remove</button>
        </tr>
      </table>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
