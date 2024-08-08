import React, {useContext} from 'react'
import './UserCard.css'
import {UserContext} from './UserContext'


function UserCard({ user}) {
    const {setUser} = useContext(UserContext)

    const handleLogin = () => {
        setUser(user)
        console.log(`${user.username} logged in`)
    }
    return (
        <div className="user-card">
            <p>{user.username}</p>
            <p>{user.name}</p>
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}
export default UserCard