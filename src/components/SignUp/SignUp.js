import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { signOut } from "@firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function Register(event) {
    // event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email);
    console.log(password);
  }

  function signin(){
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // alert("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="containerC">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign up</h2>

            {/* <div className="input-field">
              <i className="fas fa-pencil-alt"></i>
              <input type="text" placeholder="Name" name="Name" />
            </div> */}

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                onChange={handleEmailChange}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                onChange={handlePasswordChange}
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>

            {/* <div className="input-field">
              <i className="fas fa-birthday-cake"></i>
              <input type="number" placeholder="Age" name="Age" />
            </div> */}

            <p id="sign-in-info">
              Have an account ?,{" "}
              <Link onClick={signin} className="signinbtn" to="/signin">
                Sign-in
              </Link>
              .
            </p>
            <button className="btn" onClick={Register} type="button">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <img
            src="https://www.oots.in/frontend/images/registration-pro.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
