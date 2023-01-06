import { Box, Button, IconButton, useTheme } from '@mui/material'
import { tokens } from '../../../../theme'

function TaskFilter({ categories, selectedCategory, setSelectedCategory }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box display='flex' justifyContent="center" m="30px 0 20px 0">
            {categories.map((category) => {
                return (
                    <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={"contained"}
                        disabled={selectedCategory === category}
                        sx={{
                            borderRadius: '10px',
                            backgroundColor: colors.greenAccent[700],
                            marginLeft: "5px", 
                            marginRight: "5px"
                        }}>
                        {category}
                    </Button>
                )
            })}
        </Box>
    )
}

export default TaskFilter
