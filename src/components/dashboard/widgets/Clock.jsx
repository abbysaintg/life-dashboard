import React, { useState, useEffect } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'

function Clock() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Box>
            <Typography variant='h5' fontWeight='600' textAlign='center' color={colors.greenAccent[500]} pb='10px'>
                {date}
            </Typography>
            <Typography variant='h1' fontWeight='400' p='10px 20px' borderRadius='5px' backgroundColor={colors.primary[500]}>
                {time}
            </Typography>
        </Box>
    )
}

export default Clock
