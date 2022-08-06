import React from "react";
import './BookPage.css'
import { useParams,  useNavigate } from 'react-router-dom';
import titleToLink from "../formatTitle";


function BookPage(props) {

    const { books } = props;
    const params = useParams();
    const navigate = useNavigate(); 
    const book = books.filter(book => titleToLink(book.title) === params.title)[0];
    return (
        <>
        {book && <div className="book-page-content">
            <div>
                <h1 className="page-title book-page-title">{book.title}</h1>
                <p className="book-subtitle book-page-subtitle">{book.subtitle}</p>
                <p className="book-page-author">by {book.author}, year: {book.yearPublished}</p>
            </div>
            <button className="see-book" onClick={() => navigate(-1)}>Go back</button>

        </div>}

        {!book && <h1>Loading...</h1>}
        </>
    );
    
    
}

export default BookPage;