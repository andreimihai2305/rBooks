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
        <div className='page'>
            <h1 className='page-title'>Your Books</h1>
            <section className='main-section'>
                <div className='books-list'>
                    <h2 className='section-title'>Saved Books:</h2>
                    <ul >
                        {listItems}
                    </ul>
                </div>

                <div className='books-list'>
                    <h2 className='section-title'>Books You've read:</h2>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </section>
        </div>
        
        

    );
}


export default BooksList;
