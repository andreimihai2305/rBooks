import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import './App.css';


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books-list')
    .then(res => res.json())
    .then(books => setBooks(books));
  }, []);


  // Have to rewrite this event handler
  function handleAddBook(event) {
    event.preventDefault();
    const formInfo = event.target; 


    for (let i = 0; i < (formInfo.length -1); i++) {
      if (formInfo[i].value === '') {
        alert("Book info is empty or incomplete, cannot add book");
        return;
      }
    }

    const newBook = {
      title: formInfo[0].value,
      subtitle: null,
      author: formInfo[1].value,
      yearPublished: formInfo[2].value,
      tags: ['saved'] 
    };

    if (!books.some(book => book.title === newBook.title)) setBooks([...books, newBook]);


  };


  return (
    <main className="page">
      <Router>
          <Header/>
          <Routes>
            <Route exact path="/add-book" element={<AddBook onSubmit={handleAddBook}/>}/> 
            <Route exact path="/library" element={<Library books={books}/>}/> 
            <Route exact path="/" element={<Home />}/> 
            <Route exact path="*" element={<Home />}/> 
          </Routes>
      </Router>
    </main>
  );
}

export default App;
