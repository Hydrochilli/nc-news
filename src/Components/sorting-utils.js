export const sortArticles = (articles, sort_by, order) => {
    if (sort_by === 'comment_count') {
        return [...articles].sort((a, b) => {
            if(order === 'asc') {
                return a.comment_count - b.comment_count
            }else{
                return b.comment_count - a.comment_count
            }
        })
    }
    return articles
}