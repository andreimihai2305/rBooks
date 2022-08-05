import React from 'react';
import './FindBook.css';


function AddBook(props) {
    const {onSubmit} = props;

    return (
        <div className='find-book-content'>
            <h1 className='page-title find-book-title'>Find a Book</h1>
            <div className='search-book'>
                <input type="search" autoFocus placeholder='Search book title:' className='search-input'/>
            </div>
        </div>
    );
}

export default AddBook;