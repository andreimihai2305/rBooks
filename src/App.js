import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AddBook from "./components/AddBook/AddBook";
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
            <Route exact path="/add-book" element={<AddBook/>}/> 
            <Route exact path="/book-list" element={<BooksList/>}/> 
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="*" element={<Home/>}/> 
          </Routes>
      </Router>
      </main>
    </div>
  );
}

export default App;
