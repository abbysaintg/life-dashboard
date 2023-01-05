import { useState, useEffect } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'

function Quote() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [quotes, setQuotes] = useState([])
    const [randomNum, setRandomNum] = useState(null)

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
            .then((resp) => resp.json())
            .then((data) => {
                setQuotes(data)
                setRandomNum(Math.floor(Math.random() * data.length))
            })
    }, [])

    return (
        <Box textAlign='center' mt='10px'>
            <IconButton onClick={() => setRandomNum(Math.floor(Math.random() * quotes.length))} mb='10px'>
                <RefreshOutlinedIcon />
            </IconButton>
            <Box>
                {quotes.length > 0 && (
                    <Box>
                        <Typography variant='h4' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
                            {quotes[randomNum].text}
                        </Typography>
                        <Typography p='10px 0px'>{quotes[randomNum].author}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Quote