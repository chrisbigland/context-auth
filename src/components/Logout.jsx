import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { signOut, getAuth } from "firebase/auth"
import { app } from "../firebase";

const Logout = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleLogOut = () => {

    signOut(getAuth(app))
    .then(() => {
      console.log("signout successful");
      userContext.isLoggedIn = false;
      userContext.setUser("");
      alert("You have successfully logged out");
      navigate("/login");
    })
    .catch((error) => {
      console.log("an error occurred");
    });
  };


  return (
    <>
      <div>
        <button onClick={handleLogOut}>Logout with Email</button>
      </div>
    </>
  );
};

export default Logout;
