import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {UserContext} from './UserContext'
import MenuSimple from './MenuButton'
export default function Header() {
 const {user} = useContext(UserContext)

   
  return (
    <header>
      <h1><Link to="/" className="home-link">NC News</Link></h1>

      <nav>
        <Link to="/articles" className="nav-link">Articles</Link>
        <Link to="/users" className="nav-link">Users/Log-in</Link>
        <Link to="/topics" className="nav-link">Topics</Link>
       
       <div className="menu-button">
        <MenuSimple/>      
       </div> 
     
      </nav>

      {user && (
        <div className="user-info">
          <p> welcome {user.username}</p>
          <img src={user.avatar_url} alt={`${user.username}'s avatar`} className="avatar" />
          
        </div>
      )}
    
    </header>
  );
}
