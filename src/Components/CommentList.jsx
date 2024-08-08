import React, {useContext, useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import { fetchCommentsByArticleId} from './api-utils'
import CommentForm from './CommentForm'
import './CommentList.css'
import './CommentCard.css'
import {UserContext} from './UserContext'

function CommentList({ articleId}) {
    const [comments, setComments] = useState([])
    const [commentsLoading, setCommentsLoading] = useState(true)
    const [commentsError, setCommentsError] = useState(null)
    const { user } = useContext(UserContext)
     

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

      const handleDelete = (commentId) => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== commentId)
    )
   }


  
      if (commentsLoading) return <p>Loading comments...</p>
      if (commentsError) return <p>Error: {commentsError}</p>
  
  
  
  
    return (
        <div className="comment-list">
          <h3>comments</h3>    
          
            {comments.map(comment => (
                <CommentCard key={comment.comment_id} comment={comment} onVote={fetchComments} onDelete={handleDelete} />
            ))}
        </div>
    )
}

export default CommentList