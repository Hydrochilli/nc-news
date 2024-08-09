import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TopicCard.css'

function TopicCard({ topic }) {
const navigate = useNavigate()

const handleCardClick = () => {
    navigate(`/topics/${topic.slug}`)

}

return (
    <div className="topic-card" onClick={handleCardClick}>
        <h3>{topic.slug}</h3>
        <p>{topic.description}</p>
        <a href={`/topics/${topic.slug}`}>See Topic Articles</a> 
    </div>
)
}
export default TopicCard