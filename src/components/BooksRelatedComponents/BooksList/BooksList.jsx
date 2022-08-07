import React from "react";
import Book from "../Book/Book.jsx";
import "./BooksList.css";

function BooksList(props) {
  const { books, title } = props;
  const listItems = books.map((book) => <Book key={book.title} book={book} />);
  return (
    <div className="books-list">
      {title && <h2 className="section-title">{title}</h2>}
      <ul className="book-ul">{listItems}</ul>
    </div>
  );
}

export default BooksList;
