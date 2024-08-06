import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './ArticleDetailPage.css'

function ArticleDetailPage() {
    const { article_id} = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchArticle = async () => {
           try {
            const response = await axios.get(`https://sams-news.onrender.com/api/articles/${article_id}`)
            setArticle(response.data.article)
            setLoading(false)
           }catch(err) {
                setError(err.message)
                setLoading(false)
            }
           };
           fetchArticle()
        }, [article_id])
        

        if (loading) return <p>Loading..</p>
        if(error) return <p>Error: {error}</p>

        return (
        <div className="article-detail">
          <h2>{article.title}</h2>
          <p className="votes">by {article.author}</p>
          <img src={article.article_img_url} alt={article.title} />
          <p>{article.body}</p>
          <p className='votes'>Votes: {article.votes}</p>
          <p className='comments'>Comments: {article.comment_count}</p>

        </div>
      )
          
    }

export default ArticleDetailPage