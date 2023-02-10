import React, { useContext } from 'react'
import NavDropdown from './NavDropdown';
import { ThemeContext } from '../context/ThemeProvider';

const Navbar = () => {

    const themeContext = useContext(ThemeContext);

    return (
        <nav className={themeContext.isDarkTheme ? "dark":"light"}>
            <h1>
               MazinApp
            </h1>
            <button onClick={themeContext.toggleTheme}>Change Theme</button>
            <NavDropdown/>
        </nav>
    )
}

export default Navbar
