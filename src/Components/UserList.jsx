import React, {useState, useEffect} from 'react'
import { fetchAllUsers} from './api-utils'
import UserCard from './UserCard'
import  './UserList.css'
function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await fetchAllUsers()
                setUsers(fetchedUsers)
                setLoading(false)
            }catch (err) {
                seterror(err.message)
                setLoading(false)
            }        
                
         }

         fetchUsers()
        }, [])
    if (loading) return <p>Loading ...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard key={user.username} user={user} />
            ))}
        </div>
    )
    }

export default UserList