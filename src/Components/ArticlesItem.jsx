import React from 'react';
import {Link} from 'react-router-dom'

function ArticleItem({ article}) {
    
    return (
        <div className='article-card'>
            <h3>{article.title}</h3>
            <p>by {article.author}</p>
            <img src={article.article_img_url} alt={article.title} style={{width: '100%'}}/>
            <p>{article.votes} votes</p>
            <p> {article.comment_count} comments</p>
            <Link to={`/articles/${article.article_id}`}>Read Article</Link>
        </div>
    )
}
export default ArticleItem