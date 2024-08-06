import React from 'react';
import ArticlesItem from './ArticlesItem'

function ArticlesList({articles}) {

    return (
        <div className="articles-list">
            {articles.map(article => (
                <ArticlesItem key={article.article_id} article={article} />
            ) )}
        </div>
    )
}

export default ArticlesList
