import React, { useContext, useEffect, useState } from "react";
const BooksContext = React.createContext({});

export function useBooks() {
  return useContext(BooksContext);
}

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books-list")
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((error) => {
        console.error(`Error occured!\n ${error.message}`);
      });
  }, []);
  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
}
