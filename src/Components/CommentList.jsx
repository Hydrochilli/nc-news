import React, {useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import { fetchCommentsByArticleId} from './api-utils'

function CommentList({ articleId}) {
    const [comments, setComments] = useState([])
    const [commentsLoading, setCommentsLoading] = useState(true)
    const [commentsError, setCommentsError] = useState(null)
     

    const fetchComments = async() => {
        try {
          const fetchedComments = await fetchCommentsByArticleId(articleId)
       
          setComments(fetchedComments)
          setCommentsLoading(false)
        }catch(err) {
          
          setCommentsError(err.message)
          setCommentsLoading(false)
        }
      }
      
      useEffect(() => {
        fetchComments()

      }, [articleId])
  
      if (commentsLoading) return <p>Loading comments...</p>
      if (commentsError) return <p>Error: {commentsError}</p>
  
  
  
  
    return (
        <div className="comment-list">
        <h3>comments</h3>    
            {comments.map(comment => (
                <CommentCard key={comment.comment_id} comment={comment} onVote={fetchComments} />
            ))}
        </div>
    )
}

export default CommentList