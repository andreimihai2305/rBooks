import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import makeRequest from "../../services/makeRequest";
import "./SignIn.css";

function SignIn() {
  const [user, setUser] = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSignIn(event) {
    event.preventDefault();

    if (!username || !password) {
      return setErrorMessage("User or password input cannot be empty");
    }

    const user = {
      username: username,
      password: password,
    };

    makeRequest("/auth", user).then((response) => {
      if (response.status === 200) return setUser(response.data);
      console.log(response);
      // return setErrorMessage(response.data.errorMessage);
    });

    return;
  }

  return (
    <>
      <div className="page">
        <h1 className="page-title title-signin">Sign In</h1>
        <div className="form-div">
          <form onSubmit={(event) => handleSignIn(event)}>
            <label className="sign-in-label" htmlFor="username">
              Your username:
            </label>
            <input
              className="form-input"
              autoComplete="false"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username: "
              type="text"
              name="username"
              id="username"
            />
            <label className="sign-in-label" htmlFor="password">
              Enter Password:
            </label>
            <input
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password: "
              className="form-input"
              type="password"
              name="password"
              id="password"
            />
            <input className="submit link-button" type="submit" />
            {errorMessage && (
              <div>
                <p className="sign-in-label">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      {user && <Navigate replace to={"/"} />}
    </>
  );
}

export default SignIn;
