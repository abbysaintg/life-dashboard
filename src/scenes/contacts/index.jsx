import { Box, IconButton, useTheme, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { contactsData } from '../../data/contactsData'
import Header from '../global/Header'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'address', headerName: 'Address', flex: 1 },
        { field: 'city', headerName: 'City', flex: 1 },
    ]

    return (
        <Box m='20px'>
            <Header title='CONTACTS' subtitle='My Contacts List' />

            <Box
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
                        backgroundColor: colors.greenAccent[800],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.greenAccent[800],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}>
                <DataGrid rows={contactsData} columns={columns} />
            </Box>
        </Box>
    )
}

export default Contacts
