import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import AddBook from "./components/AddBook/AddBook";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import demoBooks from'./components/demoBooks';

function App() {
  const [books, setBooks] = useState(demoBooks);

  function handleAddBook(event) {
    event.preventDefault();
    const formInfo = event.target; 

    const newBook = {
      title: formInfo[0].value,
      subtitle: null,
      author: formInfo[1].value,
      yearPublished: formInfo[2].value,
      tags: ['saved'] 
    };

    if (!books.some(book => book.title === newBook.title)) setBooks([...books, newBook]);

    console.log(books);
  };


  return (
    <div>
      <main>
      <Router>
          <Header/>
          <Routes>
            <Route exact path="/add-book" element={<AddBook onSubmit={handleAddBook}/>}/> 
            <Route exact path="/library" element={<Library books={books}/>}/> 
            <Route exact path="/" element={<Home/>}/> 
          </Routes>
      </Router>
      </main>
    </div>
  );
}

export default App;
