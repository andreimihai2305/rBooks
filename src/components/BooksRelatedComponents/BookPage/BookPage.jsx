import React from "react";
import "./BookPage.css";
import { useParams, useNavigate } from "react-router-dom";
import titleToLink from "../formatTitle";
import { useBooks } from "../../../contexts/BooksContext";
function BookPage() {
  const { books } = useBooks();
  const params = useParams();
  const navigate = useNavigate();
  const book = books.filter(
    (book) => titleToLink(book.title) === params.title
  )[0];

  const { title, subtitle, Author, yearPublished } = book;
  return (
    <>
      {book && (
        <div className="book-page-content">
          <div>
            <h1 className="page-title book-page-title">{title}</h1>
            <p className="book-subtitle book-page-subtitle">{subtitle}</p>
            <p className="book-page-author">
              by {Author.name}, year: {yearPublished}
            </p>
          </div>
          <button className="link-button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      )}

      {!book && <h1>Loading...</h1>}
    </>
  );
}

export default BookPage;
