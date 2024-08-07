import React from 'react'
import './CommentCard.jsx'
import  './CommentCard.css'

function CommentCard({comment}) {
    return (
        <div className="comment-card">
            <p className="comment-author"> by {comment.author}</p>
            <p  className="comment-body">{comment.body}</p>
            <p className="comment-votes">{comment.votes} votes</p>

        </div>
    )
}

export default CommentCard


