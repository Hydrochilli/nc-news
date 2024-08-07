import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import{fetchArticleById, fetchCommentsByArticleId} from './api-utils.js'
import axios from 'axios'
import './ArticleDetailPage.css'
import CommentList from './CommentList'

function ArticleDetailPage() {
    const { article_id} = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchArticle = async () => {
           try {
            const fetchedArticle = await fetchArticleById(article_id)
            setArticle(fetchedArticle)
            setLoading(false)
           }catch(err) {
                setError(err.message)
                setLoading(false)
            }
           };

        const fetchComments = async() => {
          try {
            const fetchedComments = await fetchCommentsByArticleId(article_id)
            setComments(fetchedComments)
            setLoading(false)
          }catch(err) {
            setError(err.message)
            setLoading(false)
          }
        }
           fetchArticle()
           fetchComments()


        }, [article_id])
        

        if (loading) return <p>Loading..</p>
        if(error) return <p>Error: {error}</p>

        return (
        <div className="article-detail">
          {article && (
      <>
          <h2>{article.title}</h2>
          <p className="votes">by {article.author}</p>
          <img src={article.article_img_url} alt={article.title} />
          <p>{article.body}</p>
          <p className='votes'>{article.votes} votes</p>
          <p className='comments'>{article.comment_count} comments</p>
      </>
        
          )}
          <CommentList comments={comments} />
      </div>
        )
      }
export default ArticleDetailPage