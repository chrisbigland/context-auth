import React, {useContext} from 'react';
import { UserContext } from "../context/UserProvider";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

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

    signInWithEmailAndPassword(getAuth(app), email, password).then(response => {
      userContext.setUser(response.user.email);
      alert('Welcome back to our app')
    }).catch(e => {
      alert('Sorry something went wrong')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email..." />
      <input placeholder="password..." />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
