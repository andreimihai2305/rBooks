import React from "react";
import "./Header.css";
import { useUser } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

function Header() {
  const user = useUser();
  return (
    <nav>
      <div className="navbar-list">
        <ul>
          <li>
            <Link className="link" to="/">
              <p className="logo">rBooks</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/find">
              <p>Find Book</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/library">
              <p>See library</p>
            </Link>
          </li>
        </ul>
        {/* {!user && (
          <ul>
            <li>
              <Link className="link" to="/sign-in">
                <p>Sign In</p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/sign-in">
                <p>Register</p>
              </Link>
            </li>
          </ul>
        )} */}
      </div>
    </nav>
  );
}

export default Header;
