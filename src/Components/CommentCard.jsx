import React, {useContext, useState} from 'react'

import  './CommentCard.css'
import { voteOnComment, deleteComment} from './api-utils'
import { UserContext } from './UserContext'
import {Link} from 'react-router-dom'

function CommentCard({comment, onVote, onDelete}) {
    const {user} = useContext(UserContext)
    const [votes, setVotes] = useState(comment.votes)
    const [voteError, setVoteError] = useState(null)
    const [deleting, setDeleting] = useState(false)
    const [deleteError, setDeleteError] = useState(null)

    const voteHandler = async(voteChange) => {
        setVotes((prevVotes) => prevVotes + voteChange)
      
        
        try{
           await voteOnComment(comment.comment_id, voteChange)
           onVote()
        }catch (err) {
            setVotes((prevVotes) => prevVotes - voteChange)
        
            setVoteError('Failed to update vote. Please try again')
            
    }
}

const deleteHandler = async () => {
    setDeleting(true)

    try{
        await deleteComment(comment.comment_id)
        onDelete(comment.comment_id)
        
    }catch (err) {
        setDeleting(false)
        setDeleteError('Failed to dlete comment. Please try again')
    }
}

    return (
        <div className="comment-card">
            <p className="comment-author"> by {comment.author}</p>
            <p  className="comment-body">{comment.body}</p>
            <p className="comment-votes">{votes} votes</p>
            {user ? (
              <>    
                 <button onClick={() => voteHandler(1)}>Up</button>
                 <button onClick={() => voteHandler(-1)}>Down</button>
              </> 
          ) : (
            <p>
                <Link to ="/users">Login</Link> to vote
            </p>
            )}
            {user && user.username === comment.author && (
                <button onClick={deleteHandler} disabled= {deleting}>
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
            )}

            {voteError && <p style={{ color: 'red'}}>{voteError}</p>}
            {deleteError && <p style={{ color: red}}>{deleteError}</p>}

        </div>
    )
}

export default CommentCard


