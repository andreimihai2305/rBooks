import React from 'react';
import "./BooksList.css";


function BooksList(props) {
    const {books, title} = props;

    const listItems = books.map(book => 
    <li key={book.title} className='book'>
        <h3 className='book-title'>{book.title}</h3>
        <ul>
            <li className='book-info'>by {book.author}</li>
            <li className='book-info'>Year : {book.yearPublished}</li>
        </ul>
    </li>);

    return (
        <div className='books-list'>
            {title && <h2 className='section-title'>{title}</h2>}
            <ul className='book-ul'>
                {listItems}
            </ul>
        </div>
    );
}


export default BooksList;
