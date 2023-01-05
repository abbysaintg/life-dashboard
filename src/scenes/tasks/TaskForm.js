import { useState } from 'react'
import { Box, IconButton, useTheme, TextField } from '@mui/material'
import { tokens } from '../../theme'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

function NewTaskForm({ categories, newTaskSubmit }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [newTask, setNewTask] = useState({
        text: '',
        category: 'All',
    })

    const handleChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask), 
        })
        .then((resp) => resp.json())
        .then((newTask) => newTaskSubmit(newTask))
        setNewTask({
            text: '',
            category: 'All',
        })
        e.target.reset()
    }

    return (
        <form className='new-task-form' onSubmit={handleSubmit}>
            <label>
                Add New Task: 
                <input type='text' name='text' value={newTask.text} onChange={handleChange} />
            </label>
            <label>
                Category
                <select name='category' value={newTask.category} onChange={handleChange}>
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </label>
            <input type='submit' value='Add task' />
        </form>
    )
}

export default NewTaskForm




    // // STATE & SETTER
    // const [inputData, setInputData] = useState({
    //     title: '', 
    //     author: '', 
    //     content: ''
    // })

    // // HANDLE CHANGE
    // const handleChange = (e) => {
    //     setInputData({
    //         ...inputData,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // // HANDLE SUBMIT 
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     // e.target.reset(); 
    // }