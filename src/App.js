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

  return (
    <div>
      <main>
      <Router>
          <Header/>
          <Routes>
            <Route exact path="/add-book" element={<AddBook/>}/> 
            <Route exact path="/library" element={<Library books={books}/>}/> 
            <Route exact path="/" element={<Home/>}/> 
          </Routes>
      </Router>
      </main>
    </div>
  );
}

export default App;
