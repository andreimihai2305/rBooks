import React, { useState } from "react";
import { useBooks } from "../../contexts/BooksContext";
import Book from "../BooksRelatedComponents/Book/Book";
import "./FindBook.css";

function FindBook() {
  const { books } = useBooks();

  const [query, setQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const renderedBooks = filteredBooks.map((book) => (
    <Book key={book.title} book={book} />
  ));

  return (
    <div className="find-book-content">
      <h1 className="page-title find-book-title">Find a Book</h1>
      <div className="search-container">
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          autoFocus
          placeholder="Search book title:"
          className="search-input"
        />
      </div>

      {renderedBooks && <div className="search-books">{renderedBooks}</div>}

      {renderedBooks.length === 0 && (
        <h2 className="not-found">No Books found, sorry.</h2>
      )}
    </div>
  );
}

export default FindBook;
