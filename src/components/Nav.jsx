import React, { useContext } from "react";
import NavMenu from "./NavMenu";
import "./Nav.scss";
import ThemeContext from "../context/ThemeProvider"

const Nav = () => {

  const themeContext = useContext(ThemeContext)
console.log(themeContext)
  return (
    <nav className={themeContext.isDarkTheme ? "dark" : "light"}>

      <h1>MazinApp</h1>
<button onClick={themeContext.toggleTheme}>Click here</button>
        <NavMenu />


</nav>
  );
};

export default Nav;
