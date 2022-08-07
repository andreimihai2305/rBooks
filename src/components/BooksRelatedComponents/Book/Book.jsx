import React from "react";
import { Link } from "react-router-dom";
import titleToLink from "../formatTitle";
import "./Book.css";

function Book(props) {
  const { book } = props;
  const { title, subtitle, Author, yearPublished } = book;
  return (
    <div className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        {subtitle && <p className="book-subtitle">{subtitle}</p>}
        <ul>
          <li className="book-info">by {Author.name}</li>
          <li className="book-info">Year : {yearPublished}</li>
        </ul>
      </div>
      <Link to={`/book/${titleToLink(title)}`}>
        <button className="link-button">See Book</button>
      </Link>
    </div>
  );
}

export default Book;
