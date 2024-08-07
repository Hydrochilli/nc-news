import React, {useEffect, useState} from 'react'
import {postComment, fetchAllUsers} from './api-utils'
import './CommentForm.css'

function CommentForm({ articleId, onCommentPosted}) {
const [commentBody, setCommentBody] = useState('')
const [username, setUsername] = useState('')
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)
const [resgisteredUsers, setRegisteredUsers] = useState([])

useEffect(() => {
    const fetchUsers = async () => {
        try {
            const users = await fetchAllUsers()
            setRegisteredUsers(users.map(user => user.username))
        } catch (err) {
            console.error('Error fetching users', err)

        }
    }
    fetchUsers()
}, [])

const handleSubmit = async (event) => {
    event.preventDefault()
    if(!commentBody.trim()) {
        setError('Comment field cannot be empty')
        return
    }
    if (!resgisteredUsers.includes(username)) {
        setError('Username not recognised. Please register as a user.')
        return
    }
    setLoading(true)
    setError(null)

    try {
        const commentData = { body: commentBody, username: username }
        console.log('Submitting comment:', commentData)
        await postComment(articleId, commentData)
        setCommentBody('')
        setUsername('')
        onCommentPosted()
    }catch(err) {
        console.error('Error posting comment:', err);
        setError('Failed to post comment. Please try again')
    }finally{
        setLoading(false)
    }
}
return (
  <form onSubmit={handleSubmit} className="comment-form">
   <input
     type="text"
     value={username}
     onChange={(event) => setUsername(event.target.value)}
     placeholder="Enter your username"
     className="comment-input"
   />
   <textarea
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        placeholder="Write your comment here"
        className="comment-textarea"
    />
    {error && <p style={{ color: 'red'}}>{error}</p>}
    <button type="submit" disabled={loading}>
        {loading ? 'Posting...' : 'Submit Comment'}
    </button>
  </form>
)
}

export default CommentForm