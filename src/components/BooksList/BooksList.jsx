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
        title: "A Brief History of Time",
        subtitle: null,
        author: "Stephen W. Hawking",
        yearPublished: 1988
    },
    {
        title: "Crime and Punishment",
        subtitle: null,
        author: "Fyodor Dostoevsky",
        yearPublished: 1866
    },
    {
        title: "The Interpretation of Dreams",
        subtitle: null,
        author: "Sigmund Freud",
        yearPublished: 1899
    }
];



function BooksList() {
    
    const [books, setBooks] = useState(demoBooks);
    const listItems = books.map(book => 
    <li key={book.title} className='book'>
        <h3 className='book-title'>{book.title}</h3>
        <ul>
            <li className='book-info'>Author : {book.author}</li>
            <li className='book-info'>Year : {book.yearPublished}</li>
        </ul>
    </li>);

    return (
        <div className='page'>
            <h1 className='page-title'>Your Books</h1>
            <section className='main-section'>

                <div className='books-list'>
                    <h2 className='section-title'>Books in progress :</h2>
                    <ul className='book-ul'>
                        {listItems}
                    </ul>
                </div>
                <div className='books-list'>
                    <h2 className='section-title'>Saved books :</h2>
                    <ul className='book-ul'>
                        {listItems}
                    </ul>
                </div>

                <div className='books-list'>
                    <h2 className='section-title'>Books you've read :</h2>
                    <ul className='book-ul'>
                        {listItems}
                    </ul>
                </div>
            </section>
        </div>
        
        

    );
}


export default BooksList;