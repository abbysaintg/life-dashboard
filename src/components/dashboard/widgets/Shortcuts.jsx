import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'

const Shortcuts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <Typography variant='h5' fontWeight='600' textAlign='center' color={colors.greenAccent[500]} pb='10px'>
                Shortcuts
            </Typography>
            <Box pt='10px' variant='h5' p="13px 10px" borderRadius='5px' backgroundColor={colors.primary[500]} textAlign='center'>
                <IconButton href='https://www.bankofamerica.com/' target='_blank'>
                    <AccountBalanceOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://learning.flatironschool.com/' target='_blank'>
                    <SchoolOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://www.youtube.com/' target='_blank'>
                    <OndemandVideoOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://www.gmail.com/' target='_blank'>
                    <EmailOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://www.amazon.com/' target='_blank'>
                    <ShoppingCartOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://news.google.com/home?hl=en-US&gl=US&ceid=US:en' target='_blank'>
                    <NewspaperOutlinedIcon fontSize='large' />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Shortcuts
