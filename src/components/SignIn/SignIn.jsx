import React, { useState } from "react";
import "./SignIn.css";

function SignIn({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page">
      <h1 className="page-title title-signin">Sign In</h1>
      <div className="form-div">
        <form onSubmit={(event) => onSubmit(event, username, password)}>
          <label htmlFor="username">
            <p className="sign-in-label">Your username:</p>
            <br />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username: "
              className="form-input"
              type="text"
              name="username"
              id="username"
            />
          </label>
          <label htmlFor="password">
            <p className="sign-in-label">Enter Password:</p>
            <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password: "
              className="form-input"
              type="password"
              name="password"
              id="password"
            />
          </label>
          <input className="submit link-button" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
