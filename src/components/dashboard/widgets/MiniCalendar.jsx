import { useState, useEffect } from 'react'
import { formatDate } from '@fullcalendar/core'
import { Box, List, ListItem, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'

const MiniCalendar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/events', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => setCurrentEvents(data))
    }, [])

    return (
        <Box flex='1 1 20%' backgroundColor={colors.primary[400]} p='15px' borderRadius='4px'>
            <List>
                {currentEvents.slice(0, 4).map((event) => (
                    <ListItem
                        key={event.id}
                        sx={{
                            backgroundColor: colors.greenAccent[700],
                            margin: '10px 0',
                            borderRadius: '10px',
                        }}>
                        <Typography pr='10px' pl='10px' backgroundColor={colors.primary[400]} borderRadius='10px'>
                            {formatDate(event.date, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </Typography>
                        <Typography pl='10px'>{event.title}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default MiniCalendar
