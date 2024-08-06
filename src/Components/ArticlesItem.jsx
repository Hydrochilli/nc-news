import React from 'react';


function ArticleItem({ article}) {
    console.log('Rendering ArticleItem with article:', article)
    return (
        <div className='article-card'>
            <h3>{article.title}</h3>
            <p>by {article.author}</p>
            <img src={article.article_img_url} alt={article.title} style={{width: '100%'}}/>
            <p>Votes: {article.votes}</p>
            <p> Comments: {article.comment_count}</p>
        </div>
    )
}
export default ArticleItem