import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Logout = () => {
    const navigate = useNavigate()
    const userContext = useContext(UserContext)

    const handleLogOut = () => {
        userContext.isLoggedIn = false
        userContext.setUser("")
        console.log(userContext)
        alert("You have successfully logged out")
        navigate("/login")
    }

  return (



    <div>
    <button onClick={handleLogOut}>
        Logout
    </button>
    </div>
  )
}

export default Logout
