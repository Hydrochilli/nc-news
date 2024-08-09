import React from 'react'

function SortDropdown({ onSortChange}) {
    const handleSortChange = (event) => {
        const [sort_by, order] = event.target.value.split('-')
        onSortChange(sort_by, order)
    }
    return (
        <select onChange={handleSortChange}>
            <option value="created_at-desc">Date (Newest First)</option>
            <option value="created_at-asc">Date (Oldest First)</option>
            <option value="comment_count-desc">Comment-count (max- min)</option>
            <option value="comment_count-asc">Comment-count (min - max)</option>
            <option value="votes-desc">Votes (High to Low)</option>
            <option value="votes-asc">Votes (Low to High)</option>
        </select>
    )
}
export default SortDropdown