import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "./components/BooksRelatedComponents/BookPage/BookPage";
import FindBook from "./components/FindBook/FindBook";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import BooksProvider from "./contexts/BooksContext";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <main className="page">
      <Router>
        <Header />
        <BooksProvider>
          <Routes>
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/find" element={<FindBook />} />
            <Route exact path="/library" element={<Library />} />
            <Route exact path="/book/:title" element={<BookPage />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<Home />} />
          </Routes>
        </BooksProvider>
      </Router>
    </main>
  );
}

export default App;
