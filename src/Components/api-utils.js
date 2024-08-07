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
