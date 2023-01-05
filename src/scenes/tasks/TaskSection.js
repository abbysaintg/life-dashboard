import React, { useState, useEffect } from 'react'
import TaskFilter from './TaskFilter'
import TaskForm from './TaskForm'
import Task from './Task'
import { CATEGORIES } from './categories.js'

function TaskSection() {
    const [tasks, setTasks] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(() => {
        fetch('http://localhost:3001/tasks', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => setTasks(data))
    }, [])

    const newTaskSubmit = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const handleTaskDelete = (taskToDelete) => {
        setTasks(tasks.filter((task) => taskToDelete.id !== task.id))
    }

    const tasksToDisplay = tasks.filter((task) => task.category === selectedCategory || selectedCategory === 'All')

    return (
        <div className='section'>
            TASKS
            <TaskFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <TaskForm categories={CATEGORIES} newTaskSubmit={newTaskSubmit} />
            <div className='taskList'>
                {tasksToDisplay.map((task) => (
                    <Task key={task.id} task={task} handleTaskDelete={handleTaskDelete} />
                ))}
            </div>
        </div>
    )
}

export default TaskSection
