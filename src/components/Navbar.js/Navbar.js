import React from "react";
// import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
            </ul>

            <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>
            <Link to="/signin">
              <button className="btn">Sign In</button>
            </Link>
            <button className="btn btn-info" type="submit">
              Log Out
            </button>
            {/* <button className="btn btn-info" type="submit" onClick={Logout}> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
