import React from "react";
import BooksList from "../BooksRelatedComponents/BooksList/BooksList";
import { useBooks } from "../../contexts/BooksContext";
import "./Library.css";

function Library() {
  const { books } = useBooks();

  return (
    <div className="page">
      <h1 className="page-title">Your Books</h1>
      <section className="library-section">
        <BooksList
          books={books.filter((book) => book.tag === "saved")}
          title="Saved books:"
        />
        <BooksList
          books={books.filter((book) => book.tag === "inProgress")}
          title="Books in progress:"
        />
        <BooksList
          books={books.filter((book) => book.tag === "read")}
          title="Books You've read:"
        />
      </section>
    </div>
  );
}

export default Library;
