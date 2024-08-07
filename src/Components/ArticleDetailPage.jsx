import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import{fetchArticleById, fetchCommentsByArticleId} from './api-utils.js'
import axios from 'axios'
import './ArticleDetailPage.css'
import CommentList from './CommentList'

function ArticleDetailPage() {
    const { article_id} = useParams()
    const [article, setArticle] = useState(null)
    const [articleLoading, setArticleLoading] = useState(true)
    const [articleError, setArticleError] = useState(null)
  

   
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
          <CommentList articleId={article_id}/>    
        </div> 
      ) }
          
     
      
export default ArticleDetailPage