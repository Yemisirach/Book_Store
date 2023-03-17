import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="navBar">
          <li className="Bookstore-CMS ">
            <Link to="/">Bookstore CMS </Link>
          </li>
          <li className="book-link">
            <Link to="/">Books</Link>
          </li>
          <li className="book-link">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
