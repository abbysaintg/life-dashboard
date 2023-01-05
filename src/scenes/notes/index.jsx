import { useState, useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../global/Header'
import Note from './Note'
import NoteSearch from './NoteSearch'
import NoteForm from './NoteForm'

const Notes = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [notes, setNotes] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    // GET NOTES
    useEffect(() => {
        fetch('http://localhost:3001/notes', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => setNotes(data))
    }, [])

    // NEW NOTE
    const newNoteSubmit = (newNote) => {
        setNotes([...notes, newNote])
    }

    // DELETE NOTE
    const handleNoteDelete = (noteToDelete) => {
        setNotes(notes.filter((note) => noteToDelete.id !== note.id))
    }

    // SEARCH NOTES
    let notesToDisplay = notes
    if (searchTerm !== '') {
        notesToDisplay = notesToDisplay.filter((note) => note.text.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    return (
        <Box m="20px">
            <Header title='NOTES' subtitle='My notes' />
            <Box mt="30px">
                <NoteSearch setSearchTerm={setSearchTerm} />
                <Box sx={{
                    marginTop: "20px",
                    display: "grid", 
                    gridGap: "10px",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                }}>
                    <NoteForm newNoteSubmit={newNoteSubmit} />
                    {notesToDisplay.map((note) => (
                        <Note key={note.id} note={note} handleNoteDelete={handleNoteDelete} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Notes
