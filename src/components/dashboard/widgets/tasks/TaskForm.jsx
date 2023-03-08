import { useState } from 'react'
import { Box, IconButton, useTheme, TextField } from '@mui/material'
import { tokens } from '../../../../theme'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
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
            headers: { 'Content-Type': 'application/json' },
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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
                backgroundColor: colors.greenAccent[800],
            }}>
            <FormControl sx={{ mr: '5px', minWidth: 120 }}>
                <InputLabel>Category</InputLabel>
                <Select name='category' value={newTask.category} onChange={handleChange}>
                    <MenuItem value='All'>All</MenuItem>
                    <MenuItem value='Code'>Code</MenuItem>
                    <MenuItem value='Food'>Food</MenuItem>
                    <MenuItem value='Money'>Money</MenuItem>
                    <MenuItem value='Misc'>Misc</MenuItem>
                </Select>
            </FormControl>
            <TextField name='text' value={newTask.text} onChange={handleChange} label='Add Task...' variant='outlined'></TextField>
            <IconButton type='button' sx={{ p: 1 }} onClick={handleSubmit}>
                <AddBoxOutlinedIcon />
            </IconButton>
        </Box>
    )
}

export default NewTaskForm
