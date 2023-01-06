import { useState } from 'react'
import { Box, IconButton, useTheme, TextField } from '@mui/material'
import { tokens } from '../../theme'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

function NoteForm({ newNoteSubmit }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const date = new Date()
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    const handleClick = () => {
        if (noteText.trim().length > 0) {
            fetch('http://localhost:3001/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: noteText,
                    date: date.toLocaleDateString(),
                }),
            })
                .then((resp) => resp.json())
                .then((noteText) => newNoteSubmit(noteText))
            setNoteText('')
        }
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
            <TextField value={noteText} onChange={handleChange} label='New Note' variant='filled' multiline rows={5}></TextField>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <small>{characterLimit - noteText.length}</small>
                <IconButton type='button' sx={{ p: 1 }} onClick={handleClick}>
                    <AddBoxOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default NoteForm
