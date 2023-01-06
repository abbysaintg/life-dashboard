import { Box, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'

function NoteSearch({ setSearchTerm }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box display='flex' justifyContent='flex-start' backgroundColor={colors.primary[400]} borderRadius='3px' width="300px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)}/>
            <IconButton type='button' sx={{ p: 1 }}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default NoteSearch