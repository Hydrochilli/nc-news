import React, {useState, useEffect } from 'react';
import axios from 'axios';
import ArticlesList from './ArticlesList'
import {fetchAllArticles} from './api-utils'

function ArticlesPage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
               
               const response = await fetchAllArticles()
               setArticles(response)
              
                setLoading(false)
            } catch (err) {
                
                setError(err.message)
                setLoading(false)
            }
        }
        
        fetchArticles();

        }, [])

        if (loading) return <p>Loading..</p>
        if(error) return <p>An Error occured; {error}</p>

        return (
            <div>
                <h2>Articles</h2>
                <ArticlesList articles={articles} />
            </div>
        )
    }

    export default ArticlesPage