import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {UserContext} from './UserContext'
export default function Header() {
 const {user} = useContext(UserContext)
   
  return (
    <header>
      <h1><Link to="/" className="home-link">NC News</Link></h1>
      <nav>
        <Link to="/articles" className="nav-link">Articles</Link>
        <Link to="/users" className="nav-lonk">Users</Link>
      </nav>
      {user && (
        <div className="user-info">
          <img src={user.avatar_url} alt={`${user.username}'s avatar`} className="avatar" />
          <p> welcome {user.username}</p>
        </div>
      )}
    
    </header>
  );
}
