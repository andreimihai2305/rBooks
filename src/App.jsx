import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BookPage from "./components/BooksRelatedComponents/BookPage/BookPage";
import BooksProvider from "./contexts/BooksContext";
import FindBook from "./components/FindBook/FindBook";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Library from "./components/Library/Library";
import SignIn from "./components/SignIn/SignIn";
import UserProvider, { useUser } from "./contexts/UserContext";
import makeRequest from "./services/makeRequest";
import "./App.css";

function App() {
  // const [user, setUser] = useUser();

  // function handleSignIn(event, username, password) {
  //   event.preventDefault();

  //   if (!username || !password) {
  //     return setErrorMessage("User or password input cannot be empty");
  //   }

  //   const user = {
  //     username: username,
  //     password: password,
  //   };

  //   makeRequest("/user", user).then((response) => {
  //     if (response.status === 200) return setUser(response.data);
  //     console.log(response);
  //     return setErrorMessage(response.data.errorMessage);
  //   });

  //   return;
  // }
  return (
    <main className="page">
      <UserProvider>
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
      </UserProvider>
    </main>
  );
}

export default App;
