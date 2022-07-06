import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import AddBook from "./components/Add Book/AddBook";
import BooksList from "./components/BooksList/BooksList";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <main>
      <Router>
          <Header/>
          <Routes>
            <Route path="/add-book" element={<AddBook/>}/> 
            <Route path="/book-list" element={<BooksList/>}/> 
            <Route path="/" element={<Home/>}/> 
          </Routes>
      </Router>
      </main>
    </div>
  );
}

export default App;
