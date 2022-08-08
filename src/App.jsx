import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BookPage from "./components/BooksRelatedComponents/BookPage/BookPage";
import BooksProvider from "./contexts/BooksContext";
import FindBook from "./components/FindBook/FindBook";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import SignIn from "./components/SignIn/SignIn";
import UserProvider from "./contexts/UserContext";
import makeRequest from "./services/makeRequest";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSignIn(event, username, password) {
    console.log(username, password);
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage("User or password input cannot be empty");
      return;
    }

    const user = {
      username: username,
      password: password,
    };

    makeRequest("/user", {
      method: "GET",
      body: JSON.stringify(user),
    }).then((user) => setUser(user));
  }

  return (
    <main className="page">
      {user && <Header />}
      <UserProvider value={user}>
        <BooksProvider>
          <Routes>
            <Route
              exact
              path="/sign-in"
              element={
                <SignIn errorMessage={errorMessage} onSubmit={handleSignIn} />
              }
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
      </UserProvider>
    </main>
  );
}

export default App;
