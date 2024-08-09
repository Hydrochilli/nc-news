import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesByTopic } from './api-utils'
import ArticleList from './ArticlesList'
import './TopicArticlesPage.css'
import SortDropdown from './SortDropdown'
import {sortArticles} from './sorting-utils.js'

function TopicArticlesPage() {
    const { topic } = useParams()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sort_by, setSortBy] = useState('created_at')
    const [order, setOrder] = useState('desc')

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await fetchArticlesByTopic(topic, sort_by, order)
                
               const sortedArticles = sortArticles(fetchedArticles, sort_by, order)

              
               
               
               
               
                const filteredArticles = sortedArticles.filter(article => article.topic === topic)
              
                setArticles(filteredArticles)
                setLoading(false)

            }catch (err) {
                setError(err.message)
                setLoading(false)

            }
        }
        fetchArticles()
    }, [topic, sort_by, order])

    const handleSortChange = (newSortBy, newOrder) => {
        setSortBy(newSortBy)
        setOrder(newOrder)
    }


    if (loading) return <p>Loading articles...</p>
    if (error) return <p>Error: {error}</p>


    return (
        <div className="topic-articles-page">
            <h2>Articles on {topic}</h2>
            <SortDropdown onSortChange={handleSortChange} />
            <ArticleList articles={articles} />
        
            
        </div>
    )
}
export default TopicArticlesPage