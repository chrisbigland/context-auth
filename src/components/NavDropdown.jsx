import React, { useContext } from 'react'
// 1. Don't forget to import "useContext" and "UserContext"
import { UserContext } from '../context/UserProvider';

const NavDropdown = () => {

    const userContext = useContext(UserContext);

    return (
        <div>
            <h3>{userContext.user} (dropdown)</h3>
        </div>
    )
}

export default NavDropdown
