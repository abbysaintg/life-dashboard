import { useEffect, useState } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined'

const Weather = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [weather, setWeather] = useState('')
    const [weathercode, setWeathercode] = useState('')

    useEffect(() => {
        fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=42.36&longitude=-71.06&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York'
        )
            .then((resp) => resp.json())
            .then((data) => {
                setWeather(data)
                setWeathercode(data.current_weather.weathercode)
            })
    }, [])

    console.log(weathercode)

    return (
        <Box>
            <Typography variant='h5' fontWeight='600' textAlign='center' color={colors.greenAccent[500]} pt="10px">
                Current Weather
            </Typography>
            <Typography variant='h3' fontWeight='600' textAlign='center' pt="10px">
                {weather !== '' && <span>{weather.current_weather.temperature} °F</span>}
            </Typography>
            <Box textAlign='center' pt="10px">
                {weathercode === 0 && <WbSunnyOutlinedIcon fontSize='large' />}
                {weathercode === 1 && <WbSunnyOutlinedIcon fontSize='large' />}
                {weathercode === 2 && <WbCloudyOutlinedIcon fontSize='large' />}
                {weathercode === 3 && <WbCloudyOutlinedIcon fontSize='large' />}
                {weathercode === 45 && <WbCloudyOutlinedIcon fontSize='large' />}
                {weathercode === 48 && <WbCloudyOutlinedIcon fontSize='large' />}
                {weathercode === 51 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 53 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 55 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 56 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 57 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 61 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 63 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 65 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 66 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 67 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 71 && <AcUnitOutlinedIcon fontSize='large' />}
                {weathercode === 73 && <AcUnitOutlinedIcon fontSize='large' />}
                {weathercode === 75 && <AcUnitOutlinedIcon fontSize='large' />}
                {weathercode === 77 && <AcUnitOutlinedIcon fontSize='large' />}
                {weathercode === 80 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 81 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 82 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 85 && <AcUnitOutlinedIcon fontSize='large' />}
                {weathercode === 86 && <AcUnitOutlinedIcon fontSize='large' />}
                {weathercode === 95 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 96 && <ThunderstormOutlinedIcon fontSize='large' />}
                {weathercode === 99 && <ThunderstormOutlinedIcon fontSize='large' />}
            </Box>
        </Box>
    )
}

export default Weather

{
    /* <Box
m='40px 0 0 0'
height='75vh'
sx={{
    '& .MuiDataGrid-root': {
        border: 'none',
    },
    '& .MuiDataGrid-cell': {
        borderBottom: 'none',
    },
    '& .name-column--cell': {
        color: colors.greenAccent[300],
    },
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: colors.blueAccent[700],
        borderBottom: 'none',
    },
    '& .MuiDataGrid-virtualScroller': {
        backgroundColor: colors.primary[400],
    },
    '& .MuiDataGrid-footerContainer': {
        borderTop: 'none',
        backgroundColor: colors.blueAccent[700],
    },
    '& .MuiCheckbox-root': {
        color: `${colors.greenAccent[200]} !important`,
    },
}}> */
}
