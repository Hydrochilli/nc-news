import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesByTopic } from './api-utils'
import ArticleList from './ArticlesList'
import './TopicArticlesPage.css'

function TopicArticlesPage() {
    const { topic } = useParams()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await fetchArticlesByTopic(topic)
                const filteredArticles = fetchedArticles.filter(article => article.topic === topic)
                console.log( 'Fetched Articles:', fetchedArticles)
                setArticles(filteredArticles)
                setLoading(false)

            }catch (err) {
                setError(err.message)
                setLoading(false)

            }
        }
        fetchArticles()
    }, [topic])

    if (loading) return <p>Loading articles...</p>
    if (error) return <p>Error: {error}</p>


    return (
        <div className="topic-articles-page">
            <h2>Articles on {topic}</h2>
        
            <ArticleList articles={articles} />
        
            
        </div>
    )
}
export default TopicArticlesPage