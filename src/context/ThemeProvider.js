import React, { createContext, useState } from "react";
import UserProvider from "./UserProvider";

export const ThemeContext = createContext({});

const ThemeProvider = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeData = {
    isDarkTheme: isDarkTheme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      {props.children}
      {/* <UserProvider /> */}
    </ThemeContext.Provider>
    // whatever is wrapped in between the ThemeContext.Provider will get access to this
    // do same thing with UserProvider (will need to add in props.children + move whatever's there into its own component (Routes component))
  );
};

export default ThemeProvider;