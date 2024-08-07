import React, {useState} from 'react'
import './CommentCard.jsx'
import  './CommentCard.css'
import { voteOnComment} from './api-utils'

function CommentCard({comment, onVote}) {
    const [votes, setVotes] = useState(comment.votes)
    const [voteError, setVoteError] = useState(null)

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

    return (
        <div className="comment-card">
            <p className="comment-author"> by {comment.author}</p>
            <p  className="comment-body">{comment.body}</p>
            <p className="comment-votes">{comment.votes} votes</p>
            <button onClick={() => voteHandler(1)}>Up</button>
            <button onClick={() => voteHandler(-1)}>Down</button>
            {voteError&& <p style={{ color: 'red'}}>{voteError}</p>}

        </div>
    )
}

export default CommentCard


