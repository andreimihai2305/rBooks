import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const BooksContext = React.createContext({});

export function useBooks() {
  return useContext(BooksContext);
}

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/books-list")
  //     .then((response) => setBooks(response.data))
  //     .catch((error) => {
  //       console.error(`Error occured!\n ${error.message}`);
  //     });
  // }, []);
  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
}
