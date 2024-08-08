import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import{fetchArticleById} from './api-utils.js'
import axios from 'axios'
import './ArticleDetailPage.css'
import CommentList from './CommentList'
import CommentForm from './CommentForm.jsx'
import './CommentCard.css'
import {UserContext} from './UserContext'

function ArticleDetailPage() {
    const { article_id} = useParams()
    const [article, setArticle] = useState(null)
    const [articleLoading, setArticleLoading] = useState(true)
    const [articleError, setArticleError] = useState(null)
   
    const {user} = useContext(UserContext)
  

   
        const fetchArticle = async () => {
           try {
            const fetchedArticle = await fetchArticleById(article_id)
            setArticle(fetchedArticle)
            setArticleLoading(false)
           }catch(err) {
          
                setArticleError(err.message)
                setArticleLoading(false)
            }
           };

        useEffect(() => {
           fetchArticle()
      


        }, [article_id])

        

        if (articleLoading) return <p>Loading..</p>
        if(articleError) return <p>Error: {articleError}</p>
       
        
      
        

        return (
     
        <div className="article-detail">
          <h2>{article.title}</h2>
          <p className="votes">by {article.author}</p>
          <img src={article.article_img_url} alt={article.title} />
          <p>{article.body}</p>
          <p className='votes'>{article.votes} votes</p>
          <p className='comments'>{article.comment_count} comments</p>
          
          {user ? ( 
          
            <CommentForm articleId={article_id} onCommentPosted={() => fetchArticle()}/>
          ) : (
            <p>
              <Link to="/users">Login</Link> to comment
            </p>
              
          
         
          )}
          
          <CommentList articleId={article_id}/> 
        </div> 
      ) }
          
     
      
export default ArticleDetailPage