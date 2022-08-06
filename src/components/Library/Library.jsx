import React from 'react';
import BooksList from '../BooksRelatedComponents/BooksList/BooksList';
import './Library.css'



function Library(props) {
    const { books } = props;

    return (
        <div className='page'>
            <h1 className='page-title'>Your Books</h1>
            <section className='library-section'>
                <BooksList books={books.filter(book => book.tags.includes("saved"))} title="Saved books:"/>
                <BooksList books={books.filter(book => book.tags.includes("inProgress"))} title="Books in progress:"/>
                <BooksList books={books.filter(book => book.tags.includes("read"))} title="Books You've read:"/>
            </section>
        </div>
    );
}

export default Library;