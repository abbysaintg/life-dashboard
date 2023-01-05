import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
// import Calendar from './scenes/Calendar'
// import Tasks from './scenes/Tasks'
// import Notes from './scenes/Notes'
// import Bookmarks from './scenes/Bookmarks'
// import Contacts from './scenes/Contacts'
// import Budget from './scenes/Budget'

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <Sidebar />
                    <main className='content'>
                        <Topbar />
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            {/* <Route path='/calendar' element={<Calendar />} /> */}
                            {/* <Route path='/tasks' element={<Tasks />} /> */}
                            {/* <Route path='/notes' element={<Notes />} /> */}
                            {/* <Route path='/bookmarks' element={<Bookmarks />} /> */}
                            {/* <Route path='/contacts' element={<Contacts />} /> */}
                            {/* <Route path='/budget' element={<Budget />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
