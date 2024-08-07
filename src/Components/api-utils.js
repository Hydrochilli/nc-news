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

export const fetchAllArticles = async() => {
    const response = await axios.get(`${BASE_URL}/articles`)
    return response.data.articles
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

export const fetchAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data.users
}