import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../global/Header'
import Quote from './widgets/Quote'

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
                    {/* <StatBox title='12,361' subtitle='Emails Sent' progress='0.75' increase='+14%' icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} /> */}
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    {/* <StatBox title='431,225' subtitle='Sales Obtained' progress='0.50' increase='+21%' icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} /> */}
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    {/* <StatBox title='32,441' subtitle='New Clients' progress='0.30' increase='+5%' icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} /> */}
                </Box>
                <Box gridColumn='span 3' backgroundColor={colors.primary[400]} display='flex' alignItems='center' justifyContent='center'>
                    {/* <StatBox title='1,325,134' subtitle='Traffic Received' progress='0.80' increase='+43%' icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />} /> */}
                </Box>

                {/* ROW 2 */}
                <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
                    {/* <Box mt='25px' p='0 30px' display='flex ' justifyContent='space-between' alignItems='center'>
                        <Box>
                            <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                                Revenue Generated
                            </Typography>
                            <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height='250px' m='-20px 0 0 0'>
                        <LineChart isDashboard={true} />
                    </Box> */}
                </Box>
                <Box gridColumn='span 4' gridRow='span 4' backgroundColor={colors.primary[400]} overflow='auto'>
                    {/* <Typography variant='h5' fontWeight='600' sx={{ marginBottom: '15px' }}>
                        Spotify
                    </Typography> */}
                    <Box height='200px' p='15px' overflow='none'>
                        <iframe
                            src='https://open.spotify.com/embed/playlist/37i9dQZEVXcGVGTpOpeT99?utm_source=generator&theme=0'
                            style={{ border: 0 }}
                            width='100%'
                            height='600px'
                            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                            loading='lazy'></iframe>
                    </Box>
                </Box>

                {/* ROW 3 */}
                <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} p='30px'>
                    <Typography variant='h5' fontWeight='600'>
                        Under Construction
                    </Typography>
                    <Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
                        <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
                            Coming Soon
                        </Typography>
                        <Typography>.........</Typography>
                    </Box>
                </Box>
                <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} p='30px'>
                    <Typography variant='h5' fontWeight='600'>
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
