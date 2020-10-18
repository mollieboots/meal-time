import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1>Meal Time!</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
