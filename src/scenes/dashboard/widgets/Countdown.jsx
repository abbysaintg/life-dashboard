import { useState, useEffect } from 'react'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'

function CountdownTimer() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    // Set the target date to March 10th, 2023
    const targetDate = new Date('March 10, 2023')

    useEffect(() => {
        const interval = setInterval(() => {
            // Get the current date and time
            const currentDate = new Date()

            // Calculate the time difference in milliseconds
            const timeDifference = targetDate - currentDate

            // Convert the time difference to days, hours, minutes, and seconds
            setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutes(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((timeDifference % (1000 * 60)) / 1000))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Box>
            <Typography variant='h5' fontWeight='600' textAlign='center' color={colors.greenAccent[500]} pb='10px'>
                Countdown
            </Typography>
            <Box display="flex" justifyContent="space-between">
                    <Typography variant='h5' p="10px 10px" mr="5px" borderRadius='5px' backgroundColor={colors.primary[500]} textAlign='center'>
                        <div>{days}</div>
                        <div>days</div>
                    </Typography >
                    <Typography variant='h5' p="10px 10px" ml="5px" mr="5px" borderRadius='5px' backgroundColor={colors.primary[500]} textAlign='center'>
                        <div>{hours}</div>
                        <div>hours</div>
                    </Typography>
                    <Typography variant='h5' p="10px 10px" ml="5px" mr="5px" borderRadius='5px' backgroundColor={colors.primary[500]} textAlign='center'>
                        <div>{minutes}</div>
                        <div>minutes</div>
                    </Typography>
                    <Typography variant='h5' p="10px 10px" ml="5px" borderRadius='5px' backgroundColor={colors.primary[500]} textAlign='center'>
                        <div>{seconds}</div>
                        <div>seconds</div>
                    </Typography>
            </Box>
        </Box>
    )
}

export default CountdownTimer
