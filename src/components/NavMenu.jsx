import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const NavMenu = () => {

  const data = useContext(UserContext)

  return (
    <div>
        <select name="users" id="users">
            <option value="johndoe">{data.name}</option>
        </select>
    </div>
  )
}

export default NavMenu
