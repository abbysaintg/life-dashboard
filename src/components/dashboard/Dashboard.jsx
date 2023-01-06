import { useState } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../global/Header'
import Weather from './widgets/Weather'
import Clock from './widgets/Clock'
import Countdown from './widgets/Countdown'
import Shortcuts from './widgets/Shortcuts'
import MiniCalendar from './widgets/MiniCalendar'
import Quote from './widgets/Quote'
import Tasks from './widgets/tasks/Tasks'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'

const Dashboard = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [srcUrl, setSrcUrl] = useState('https://open.spotify.com/embed/playlist/37i9dQZF1DX0r3x8OtiwEM?utm_source=generator')

    const changePlaylist = (url) => {
        setSrcUrl(url)
    }

    return (
        <Box p='0px 20px 20px 20px' className='box'>
            {/* HEADER */}
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' />
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
                </Box>
                <Box gridColumn='span 4' gridRow='span 4' backgroundColor={colors.primary[400]} p='30px 15px'>
                    <Typography variant='h5' fontWeight='600' textAlign='center'>
                        Playlist
                    </Typography>
                    <Box m='10px' backgroundColor={colors.greenAccent[700]} borderRadius='5px' textAlign='center' width='40%' mx='auto'>
                        <IconButton onClick={() => changePlaylist('https://open.spotify.com/embed/playlist/37i9dQZF1DX0r3x8OtiwEM?utm_source=generator')}>
                            <LooksOneOutlinedIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={() => changePlaylist('https://open.spotify.com/embed/playlist/37i9dQZEVXcGVGTpOpeT99?utm_source=generator')}>
                            <LooksTwoOutlinedIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={() => changePlaylist('https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator')}>
                            <Looks3OutlinedIcon fontSize='medium' />
                        </IconButton>
                        <IconButton onClick={() => changePlaylist('https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator')}>
                            <Looks4OutlinedIcon fontSize='medium' />
                        </IconButton>
                    </Box>
                    <Box height='200px' overflow='none'>
                        <iframe
                            style={{ border: 0 }}
                            src={srcUrl}
                            width='100%'
                            height='495px'
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
