import React, { useState, useEffect } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'

function Clock() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Box>
            <Typography variant='h5' fontWeight='600' textAlign='center' color={colors.greenAccent[500]} pb='10px'>
                Current Time
            </Typography>
            <Typography variant='h1' fontWeight='400' p='10px 20px' borderRadius='5px' backgroundColor={colors.primary[500]}>
                {time}
            </Typography>
        </Box>
    )
}

export default Clock

// backgroundColor='#52323f'
