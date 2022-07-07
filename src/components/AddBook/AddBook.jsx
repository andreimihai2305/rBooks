import React from 'react';
import './AddBook.css';

function AddBook() {
    return (
        <div className='page'>
            <h1 className='page-title'>Add a book</h1>
            <form className="book-form">
                <div className='input-section'>
                    <label htmlFor="title">Book Title: </label> <br/>
                    <input className='add-book-input' type="text" name="title" id="title"/>
                </div>
                <div className='input-section'>
                    <label htmlFor="title">Author: </label> <br/>
                    <input className='add-book-input' type="text" name="title" id="title"/>
                </div>
                <div className='input-section'>
                    <label htmlFor="title">Year published: </label> <br/>
                    <input className='add-book-input' type="text" name="title" id="title"/>
                </div>
                <button className="submit-button" type='submit'>Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;