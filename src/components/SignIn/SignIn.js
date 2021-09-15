import React from "react";
import "./SignIn.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="containerC">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </div>

              <p id="sign-in-info">
                Don't have an account ?,{" "}
                <Link className="signinbtn" to="/signup">
                  Sign-up
                </Link>
                .
              </p>
              <input type="submit" value="Login" className="btn solid" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <img
              src="https://bxminers.com/assets/img/signup-left.png"
              className="image"
              alt="Signup logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
