import React from "react";
import './Book.css';

function Book(props) {
    const { book } = props;

    return (
        <div className='book'>
            <h3 className='book-title'>{book.title}</h3>
            { book.subtitle && <p className='book-subtitle'>{book.subtitle}</p> } 
            <ul>
                <li className='book-info'>by {book.author}</li>
                <li className='book-info'>Year : {book.yearPublished}</li>
            </ul>
        </div>
    );
}

export default Book;