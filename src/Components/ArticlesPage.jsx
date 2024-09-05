import React, {useState, useEffect } from 'react';
import axios from 'axios';
import ArticlesList from './ArticlesList'
import {fetchAllArticles} from './api-utils'
import SortDropdown from './SortDropdown'
import {sortArticles} from './sorting-utils'



function ArticlesPage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const[sort_by, setSortBy] = useState('created_at')
    const [order, setOrder] = useState('desc')

    useEffect(() => {
        const fetchArticles = async () => {
           
           try{    
               const fetchedArticles = await fetchAllArticles(sort_by, order)
               const sortedArticles = sortArticles(fetchedArticles, sort_by, order)
               setArticles(sortedArticles)
              
                setLoading(false)
            } catch (err) {
                
                setError(err.message)
                setLoading(false)
            }
        }
        
        fetchArticles()

        }, [sort_by, order])

        const handleSortChange = (newSortBy, newOrder) => {
            setSortBy(newSortBy)
            setOrder(newOrder)
        }

        if (loading) return <p>Loading..</p>
        if(error) return <p>An Error occured; {error}</p>

        return (
            <div>
                <h2>Articles</h2>
                <SortDropdown onSortChange={handleSortChange} />
               
                <ArticlesList articles={articles} />
            </div>
        )
    }

    export default ArticlesPage