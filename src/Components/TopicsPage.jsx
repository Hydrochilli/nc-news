import React, {useState, useEffect } from 'react'
import { fetchAllTopics } from './api-utils'
import TopicCard from './TopicCard';
import {useNavigate} from 'react-router-dom'
import './TopicsPage.css'

function TopicsPage() {
    const [topics, setTopics] = useState([])
    const [selectedTopic, setSelectedTopic] = useState('all')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


useEffect(() => {
    const fetchTopics = async () => {
        try{
            const fetchedTopics = await fetchAllTopics()
            setTopics(fetchedTopics)
            setLoading(false)
        }catch(err) {
            setError(err.message)
            setLoading(false)
        }
    }
    fetchTopics()
}, [])


const handleTopicChange = (event) => {
    const topic = event.target.value
    setSelectedTopic(topic)
    navigate(`/topics/${topic}`)
}
    

if(loading) return <p>Loading...</p>
if (error) return <p>Error: {error}</p>

return (
    <div className="topics-page">
        <h2>Topics</h2>
        <select onChange={handleTopicChange} value={selectedTopic}>
            <option value="all">All</option>
            
            
            {topics.map((topic) => (
                <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                </option> 
            ))}     
        </select>
        <div className="topics-list">
            {topics.map((topic) => (
                <TopicCard key={topic.slug} topic={topic}/>

            ))}
        </div>
    </div>
)

}

export default TopicsPage