import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookPage from "./components/BooksRelatedComponents/BookPage/BookPage";
import BooksProvider from "./contexts/BooksContext";
import FindBook from "./components/FindBook/FindBook";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import SignIn from "./components/SignIn/SignIn";
import makeRequest from "./services/makeRequest";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  function handleSignIn(event, username, password) {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    makeRequest("/user", {
      method: "POST",
      body: JSON.stringify(user),
    }).then((user) => setUser(user));
  }

  return (
    <main className="page">
      <Router>
        <Header />
        <BooksProvider>
          <Routes>
            <Route
              exact
              path="/sign-in"
              element={<SignIn onSubmit={handleSignIn} />}
            />
            <Route
              exact
              path="/find"
              element={user ? <FindBook /> : <Navigate replace to="/sign-in" />}
            />
            <Route
              exact
              path="/library"
              element={user ? <Library /> : <Navigate replace to="/sign-in" />}
            />
            <Route
              exact
              path="/book/:title"
              element={user ? <BookPage /> : <Navigate replace to="/sign-in" />}
            />
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate replace to="/sign-in" />}
            />
            <Route
              exact
              path="*"
              element={user ? <Home /> : <Navigate replace to="/sign-in" />}
            />
          </Routes>
        </BooksProvider>
      </Router>
    </main>
  );
}

export default App;
