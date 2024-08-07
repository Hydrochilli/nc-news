import React from 'react'
import CommentCard from './CommentCard'

function CommentList({ comments}) {
    return (
        <div className="comment-list">
        <h3>comments:</h3>    
            {comments.map(comment => (
                <CommentCard key={comment.comment_id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentList