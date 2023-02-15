import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { app } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        userContext.setUser(response.user.email);
        userContext.isLoggedIn = true;
        console.log(response.user.email);
        navigate("/");
      })
      .catch((e) => {
        console.log("this is the error", e);
      });
  };

  const userContext = useContext(UserContext);
  //UserContext is 'user' (object) data passed down to us by 'UserProvider'

  const handleSubmit = (e) => {
    // function that is run when we click submit

    e.preventDefault();
    // prevents automatic page refresh that occurs when hitting submit.

    // as 'on submit' is on <form> and not <input>, the target is an array, not an object. We can access the array indexes as usual below.

    const email = e.target[0].value;
    const password = e.target[1].value;
    //signInWithEmailAndPassword() needs to know the auth instance. We get this by using getAuth() and passing in the firebase app. It also needs the email and password, which we already have from the input.

    //this returns a promise so we use '.then' and set the user to the email address of the user.
    // from the response we get the user and we 'setUser' to the email from the response.

    // getAuth is basically a 'handshake' connecting the firebase database with our app. We pass 'signInWithEmailAndPassword' the email and password and, if they are successful, we get a response (will be an object containing the user data - check firebase docs for more info). I can then set the user to the email in the database (although this could also just be the variable, 'email' as it will be the same)
    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((response) => {
        userContext.setUser(response.user.email);
        userContext.isLoggedIn = true;
        //  I don't think 'isLoggedIn' is actually required here (something I added). We can tell if there is a user logged in if 'user' state has a value.
        console.log(userContext);
        alert("Welcome back to our app");
        navigate("/");
      })
      .catch((e) => {
        alert("Sorry something went wrong");
      });
  };

  return (
    <>
      <div className="emailLogin">
        <form onSubmit={handleSubmit}>
          <input placeholder="email..." />
          <input placeholder="password..." />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="googleLogin">
        <button onClick={handleClick}>Sign in with Google</button>
      </div>
    </>
  );
};

export default Login;
