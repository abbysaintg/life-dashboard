import React from 'react'

function TaskFilter({ categories, selectedCategory, setSelectedCategory }) {
    return (
        <div className='categories'>
            <h5>Category filters</h5>
            <div>
                {categories.map((category) => {
                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={category === selectedCategory ? 'selected' : ''}>
                            {category}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskFilter
