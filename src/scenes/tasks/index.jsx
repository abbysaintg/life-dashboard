import { useState, useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import TaskFilter from './TaskFilter'
import TaskForm from './TaskForm'
import Task from './Task'
import Header from '../global/Header'
import { CATEGORIES } from './categories.js'

const Tasks = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
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
        <Box m='20px'>
            <Header title='NOTES' subtitle='My notes' />
            <Box>
                <TaskFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <TaskForm categories={CATEGORIES} newTaskSubmit={newTaskSubmit} />
                <Box backgroundColor={colors.primary[400]} width='400px' mt="30px">
                    {tasksToDisplay.map((task) => (
                        <Task key={task.id} task={task} handleTaskDelete={handleTaskDelete} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Tasks
