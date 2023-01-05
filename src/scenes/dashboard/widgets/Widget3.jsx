import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'

const Widget3 = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <Typography variant='h5' fontWeight='600' textAlign='center' color={colors.greenAccent[500]} pt='10px'>
                Widget3
            </Typography>
        </Box>
    )
}

export default Widget3