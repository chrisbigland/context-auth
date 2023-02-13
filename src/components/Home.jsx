import React, { useContext } from 'react'
import Logout from './Logout';
import { UserContext } from '../context/UserProvider';
import { ThemeContext } from '../context/ThemeProvider';

const Home = () => {

    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);
    const logOut = userContext.user ? <Logout /> : "" ;

    return (
        <main className={themeContext.isDarkTheme ? "dark":"light"}>
            <h1>Welcome {userContext.user}!</h1>
            <div>{logOut}</div>
        </main>
    )
}

export default Home
