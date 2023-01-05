import React from 'react'

function Task({ task, handleTaskDelete }) {

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/tasks/${task.id}`, {
            method: 'DELETE',
        })
        .then((resp) => resp.json())
        .then(handleTaskDelete(task))
    }

    return (
        <div className='taskItem'>
            <div className='label'>{task.category}</div>
            <div className='taskText'>{task.text}</div>
            <button className='deleteButton' onClick={(e) => handleDeleteClick(task)}>
                X
            </button>
        </div>
    )
}

export default Task
