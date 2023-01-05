import { Box, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

function Note({ note, handleNoteDelete }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/notes/${note.id}`, {
            method: 'DELETE',
        })
            .then((resp) => resp.json())
            .then(handleNoteDelete(note))
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '10px',
                borderRadius: '10px',
                whiteSpace: 'pre-wrap',
                minWidth: 200,
                minHeight: 200,
                maxWidth: 300,
                maxHeight: 300,
                backgroundColor: colors.blueAccent[700],
                // '&:hover': {
                //     backgroundColor: colors.greenAccent[200],
                // },
            }}>
            <span>{note.text}</span>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <small>{note.date}</small>
                <IconButton type='button' sx={{ p: 1 }} onClick={handleDeleteClick}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Note
