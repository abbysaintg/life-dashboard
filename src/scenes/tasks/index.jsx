import { useState, useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import TaskFilter from './TaskFilter'
import TaskForm from './TaskForm'
import Task from './Task'
import Header from '../../components/Header'

const Tasks = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m='20px'>
            <Header title='NOTES' subtitle='My notes' />
            <Box></Box>
        </Box>
    )
}

export default Tasks
