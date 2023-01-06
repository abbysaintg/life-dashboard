import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import Header from '../global/Header'
import { tokens } from '../../theme'

const Calendar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])
    const [calendar, setCalendar] = useState(null)

    // GET EVENTS
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

    // RENDER EVENTS TO CALENDAR 
    const renderEventContent = (eventInfo) => {
        return (
            <Typography variant='h5' fontWeight='600' textAlign='center'>
                {eventInfo.event.title}
            </Typography>
        )
    }

    // ADD CALENDAR EVENT
    const handleDateClick = (selected) => {
        const title = prompt('Event Title:')
        const calendarApi = selected.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    // DELETE CALENDAR EVENT
    const handleEventClick = (selected) => {
        if (window.confirm(`Confirm delete '${selected.event.title}'`)) {
            selected.event.remove()
        }
    }

    return (
        <Box m='20px'>
            <Header title='Calendar' subtitle='My Personal Calendar' />

            <Box display='flex' justifyContent='space-between'>
                {/* CALENDAR SIDEBAR */}
                <Box flex='1 1 20%' backgroundColor={colors.primary[400]} p='15px' borderRadius='4px'>
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[700],
                                    margin: '10px 0',
                                    borderRadius: '2px',
                                }}>
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex='1 1 100%' ml='15px'>
                    <FullCalendar
                        events={currentEvents}
                        height='75vh'
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        onDateClick={handleDateClick}
                        onEventClick={handleEventClick}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        eventsSet={(calendar) => {
                            setCalendar(calendar)
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar
