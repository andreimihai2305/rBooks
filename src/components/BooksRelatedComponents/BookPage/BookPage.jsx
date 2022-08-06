import React from "react";
import './BookPage.css'
import { useParams } from 'react-router-dom';
import titleToLink from "../formatTitle";


function BookPage(props) {

    const { books } = props;
    const params = useParams();

    const book = books.filter(book => titleToLink(book.title) === params.title)[0];
    return (
        <>
        {book && <div className="book-page-content">
            <h1 className="page-title book-page-title">{book.title}</h1>
            <p className="book-subtitle book-page-subtitle">{book.subtitle}</p>
            <p className="book-page-author">by {book.author}, year: {book.yearPublished}</p>


        </div>}

        {!book && <h1>Loading...</h1>}
        </>
    );
    
    
}

export default BookPage;