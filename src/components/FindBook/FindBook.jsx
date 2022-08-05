import React, { useState } from 'react';
import './FindBook.css';


function FindBook(props) {
    const { books } = props;

    const [query, setQuery] = useState('');


    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    const renderedBooks = filteredBooks.map(book => 
        <div className='book' key={book.title}>
            <h3 className='search-book-title'>{book.title}</h3>
            {book.subtitle && <p className='search-book-subtitle'> {book.subtitle}</p>}
            <p>by {book.author}</p>
            <p>year: {book.yearPublished}</p>
        </div>
    );

 
    return (
        <div className='find-book-content'>
            <h1 className='page-title find-book-title'>Find a Book</h1>
            <div className='search-container'>
                <input 
                type="search"
                value={query} 
                onChange={(event) =>{setQuery(event.target.value)}} 
                autoFocus placeholder='Search book title:' 
                className='search-input'/>
            </div>
            {renderedBooks && 
            <div className='search-books'>
                {renderedBooks}
            </div>}
            
            {(renderedBooks.length === 0) && <h2 className='not-found'>No Books found, sorry.</h2>}
        </div>
    );
}


export default FindBook;
