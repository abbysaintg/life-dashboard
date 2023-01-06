import { Box, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../../../theme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

function Task({ task, handleTaskDelete }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/tasks/${task.id}`, {
            method: 'DELETE',
        })
            .then((resp) => resp.json())
            .then(handleTaskDelete(task))
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
            <Box display='flex'>
                <Box p='5px' borderRadius="10px" backgroundColor={colors.greenAccent[700]} >
                    {task.category}
                </Box>
                <Box p='5px'>{task.text}</Box>
            </Box>
            <Box>
                <IconButton type='button' sx={{ p: 1 }}>
                    <CreateOutlinedIcon />
                </IconButton>
                <IconButton type='button' sx={{ p: 1 }} onClick={handleDeleteClick}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Task
