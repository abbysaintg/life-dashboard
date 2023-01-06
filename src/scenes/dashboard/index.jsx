import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../global/Header'
import Weather from './widgets/Weather'
import Clock from './widgets/Clock'
import Countdown from './widgets/Countdown'
import Shortcuts from './widgets/Shortcuts'
import MiniCalendar from './widgets/MiniCalendar'
import Quote from './widgets/Quote'
import Tasks from './widgets/tasks'

const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box p='0px 20px 20px 20px'>
            {/* HEADER */}
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' subtitle='Landing page of sorts' />
            </Box>

            {/* GRID & CHARTS */}
            <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='20px'>
                {/* ROW 1 */}
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <Clock />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <Weather />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <Countdown />
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    <Shortcuts />
                </Box>

                {/* ROW 2 */}
                <Box gridColumn='span 4' gridRow='span 4' backgroundColor={colors.primary[400]} p='30px'>
                    <Typography variant='h5' fontWeight='600' textAlign='center'>
                        To Do List
                    </Typography>
                    <Tasks />
                </Box>
                <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} p='30px'>
                    <Typography variant='h5' fontWeight='600' textAlign='center'>
                        Upcoming Events
                    </Typography>
                    <MiniCalendar />
                    {/* <Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
                        <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
                            Coming Soon
                        </Typography>
                        <Typography>.........</Typography>
                    </Box> */}
                </Box>
                <Box gridColumn='span 4' gridRow='span 4' backgroundColor={colors.primary[400]} overflow='auto'>
                    <Box height='200px' p='15px' overflow='none'>
                        <iframe
                            style={{ border: 0 }}
                            src='https://open.spotify.com/embed/playlist/37i9dQZEVXcGVGTpOpeT99?utm_source=generator&theme=0'
                            width='100%'
                            height='600px'
                            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                            loading='lazy'></iframe>
                    </Box>
                </Box>

                {/* ROW 3 */}
                <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} p='30px'>
                    <Typography variant='h5' fontWeight='600' textAlign='center'>
                        Inpsirational Quote
                    </Typography>
                    <Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
                        <Quote />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard

{
    /* <iframe
src='https://open.spotify.com/embed/playlist/37i9dQZEVXcGVGTpOpeT99?utm_source=generator&theme=0'
style={{ border: 0 }}
width='100%'
height='600px'
allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
loading='lazy'></iframe> */
}
