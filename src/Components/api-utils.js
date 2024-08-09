import axios from 'axios'

const BASE_URL = 'https://sams-news.onrender.com/api'

export const fetchArticleById = async(article_id) => {
    const response = await axios.get(`${BASE_URL}/articles/${article_id}`)
    return response.data.article
}

export const fetchCommentsByArticleId = async(article_id) => {
    const response = await axios.get(`${BASE_URL}/articles/${article_id}/comments`)
    return response.data.comments
}

export const fetchAllArticles = async(sort_by = 'created_at', order = 'desc') => {
   try{ 
     const params = {}
    if( sort_by  !== 'comment_count' ) {
        params.sort_by = sort_by
        params.order= order
       }
   const response = await axios.get(`${BASE_URL}/articles`, {params})
    return response.data.articles
} catch(error) {
    throw error
}
}

export const voteOnComment = async(comment_id, voteChange) => {
    const response = await axios.patch(`${BASE_URL}/comments/${comment_id}`, {inc_votes: voteChange})
    return response.data.comment
}

export const postComment = async (article_id, commentData) => {

    console.log('postin comment:', commentData)
    const response = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, commentData)
    console.log('Comment posted:', response.data);
    return response.data.comment

}
export const deleteComment = async (comment_id) => {
    const response = await axios.delete(`${BASE_URL}/comments/${comment_id}`)
    return response.data
}

export const fetchAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data.users
}

export const fetchAllTopics = async () => {
    const response = await axios.get(`${BASE_URL}/topics`)
    return response.data.topics
}
export const fetchArticlesByTopic = async(topic, sort_by = 'created_at', order = 'desc') => {
  
    try{
    
       const params = {
            topics: topic && topic !== 'all' ? topic : undefined
       }

           if( sort_by  !== 'comment_count' ) {
             params.sort_by = sort_by
             params.order= order
            }
    
    const response = await axios.get(`${BASE_URL}/articles`, { params })
    console.log('fetched articles:', response.data.articles)
    return response.data.articles
} catch (error) {
    throw error
}
}