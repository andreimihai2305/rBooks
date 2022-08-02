import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import demoBooks from'./components/demoBooks';
import './App.css';


function App() {
  const [books, setBooks] = useState(demoBooks);

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
            <Route exact path="/" element={<Home books={books}/>}/> 
            <Route exact path="*" element={<Home books={books}/>}/> 
          </Routes>
      </Router>
    </main>
  );
}

export default App;
