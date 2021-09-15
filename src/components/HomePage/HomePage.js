import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
// import { useState } from "react";

const HomePage = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      const email = user.email
      console.log(email);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  function Logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          Navbar Component
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
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            </ul> */}

            {/* <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>
            <Link to="/signin">
              <button className="btn">Sign In</button>
            </Link> */}
            {/* <button className="btn" >
               {uid} 
            </button> */}
            <button className="btn btn-info" type="submit" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
