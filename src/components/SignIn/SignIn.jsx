import React from "react";

function SignIn() {
  return (
    <div className="page">
      <h1 className="page-title">Sign In</h1>
      <div className="form-div">
        <form>
          <label htmlFor="username">
            Your username:
            <br />
            <input type="text" name="name" id="name" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
