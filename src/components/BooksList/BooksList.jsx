import React, { useState } from 'react';
import "./BooksList.css";

const demoBooks = [
    {
        title: "Beyond Good and Evil",
        subtitle: "Prelude to a Philosophy of the Future",
        author: "Friedrich Nietzsche",
        yearPublished: 1886
    },
    {
        title: "12 Rules for Life",
        subtitle: "An antidote to chaos",
        author: "Jordan B. Peterson",
        yearPublished: 2018
    },
    {
        title: "Crime and Punishment",
        subtitle: null,
        author: "Fyodor Dostoevsky",
        yearPublished: 1866
    }
];



function BooksList() {
    
    const [books, setBooks] = useState(demoBooks);
    const listItems = books.map(book => <li key={book.title} className='book-title'>{book.title}</li>)
    return (
        <div className='main-list'>
            <h1 className='page-title'>Books List:</h1>
            <ul  className='books-list'>
                {listItems}
            </ul>
        </div>
    );
}

export default BooksList;
