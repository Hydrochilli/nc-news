import React, {useContext} from 'react'
import './Header.css'
import {UserContext} from './UserContext'
export default function Header() {
 const {user} = useContext(UserContext)
   
  return (
    <header>
      <h1>NC News</h1>
      {user && <p>{user.username} is Logged in</p>}
    
    </header>
  );
}
