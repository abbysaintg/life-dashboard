import { Box, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

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
        <Box display='flex' p='10px' width='500px'>
            <Box p='10px'>{task.category}</Box>
            <Box p='10px'>{task.text}</Box>
            <IconButton type='button' sx={{ p: 1 }}  onClick={handleDeleteClick}>
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </Box>
    )
}

export default Task

// sx={{ backgroundColor={colors.primary[400]}
//     //     padding: '10px',
//     //     background: "lightcyan",
//     //     color: "blue",
//     //     border: "solid #cbcbff 0.15rem",
//         border-radius: "5px",
//     }}
// .tasks .task {
//     background: #ffffff99;
//     border-bottom: grey solid 1px;
//     padding: 0.25rem 1rem 0.25rem 0.25rem;
//     display: flex;
//   }

//   .tasks .task .text {
//     line-height: 1.5rem;
//     padding-left: 0.25rem;
//   }

//   .tasks .task .label {
//     background: lightcyan;
//     color: blue;
//     padding: 0.25rem;
//     font-size: 0.75rem;
//     border: solid #cbcbff 0.15rem;
//     border-radius: 0.25rem;
//   }
