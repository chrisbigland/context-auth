// Don't forget to import!!
import React, { createContext, useState } from "react";

// 2. Create a context which our children will use for accessing the data
export const UserContext = createContext({});

const UserProvider = props => {
  const [user, setUser] = useState("");

  // 1. This is the data we want to be shared throughout the app.. How do we do it?
  const data = {
    user: user,
    setUser: setUser,
    isLoggedIn: false,
  };

  // 3. We need to provide the data to our descendents like below....
  return <UserContext.Provider value={data}>{props.children}</UserContext.Provider>;
};

export default UserProvider;