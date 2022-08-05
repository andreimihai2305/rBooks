import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FindBook from "./components/FindBook/FindBook";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import demoBooks from "./demoBooks";
import './App.css';


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books-list')
    .then(res => res.json())
    .then(books => setBooks(books))
    .catch(error => {
      console.error(`Error occured!\n ${error.message}`);
      setBooks(demoBooks);
    });
  }, []);



  return (
    <main className="page">
      <Router>
          <Header/>
          <Routes>
            <Route exact path="/find" element={<FindBook books={books}/>}/> 
            <Route exact path="/library" element={<Library books={books}/>}/> 
            <Route exact path="/" element={<Home />}/> 
            <Route exact path="*" element={<Home />}/> 
          </Routes>
      </Router>
    </main>
  );
}

export default App;
