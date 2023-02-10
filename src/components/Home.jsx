import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider';
import { ThemeContext } from '../context/ThemeProvider';

const Home = () => {

    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    return (
        <main className={themeContext.isDarkTheme ? "dark":"light"}>
            <h1>Welcome {userContext.user}!</h1>
        </main>
    )
}

export default Home
