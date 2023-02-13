// Don't forget to import!!
import React, {createContext, useState} from 'react'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from "../components/Register.jsx"
import Logout from '../components/Logout';
import { Route, Routes } from "react-router-dom";

// 2. Create a context which our children will use for accessing the data
export const UserContext = createContext({});

const UserProvider = () => {

    const [user, setUser] = useState("");

    // 1. This is the data we want to be shared throughout the app.. How do we do it?
    const data = {
        user: user,
        setUser: setUser,
        isLoggedIn: false
    }

    // 3. We need to provide the data to our descendents like below....
    return (
        
        <UserContext.Provider value={data}>
            <Navbar />
            <Routes >
            <Route path="/" element={<Home /> }/>
      
            <Route path="/login" element={<Login /> }/>
    
            <Route path="/register" element={<Register />}/>
            </Routes>
            
            
        
        </UserContext.Provider>
    )
}

export default UserProvider;
