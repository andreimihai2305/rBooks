import React, { useContext, useEffect, useState } from "react";
import demoBooks from "../demoBooks";
const BooksContext = React.createContext({});

export const useBooks = () => useContext(BooksContext);

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books-list")
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((error) => {
        console.error(`Error occured!\n ${error.message}`);
        setBooks(demoBooks);
      });
  }, []);
  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
}
