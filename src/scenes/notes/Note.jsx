import { Box, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

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
                backgroundColor: colors.greenAccent[800],
                '&:hover': {
                    backgroundColor: colors.greenAccent[700],
                },
            }}>
            <span>{note.text}</span>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <small>{note.date}</small>
                <div>
                    <IconButton type='button' sx={{ p: 1 }}>
                        <CreateOutlinedIcon />
                    </IconButton>
                    <IconButton type='button' sx={{ p: 1 }} onClick={handleDeleteClick}>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </div>
            </Box>
        </Box>
    )
}

export default Note
