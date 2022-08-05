import React from "react";
import Book from "../Book/Book";
import {useParams} from 'react-router-dom';
import titleToLink from "../formatTitle";

function BookPage(props) {
    const { books } = props;

    const params = useParams();
    const book = books.filter(book => titleToLink(book.title) === params.title)[0];
    return (

        <>
            {book && <Book book={book}/>}
        </>
    );
    
}

export default BookPage;