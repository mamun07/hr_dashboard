import React from 'react'
import theme from '../theme'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import TopBar from '../container/TopBar';
import SideBar from '../container/SideBar';
import { Box, ThemeProvider, CssBaseline} from '@mui/material';


export default function Layout({children}) {
  return (
    <>
         <CssBaseline />
         <ThemeProvider theme={theme}>
           <TopBar />
           <Box display='flex' component="div" alignItems='revert' sx={{height:'95vh'}}>
              <Box component="div" flex=".8" sx={{backgroundColor: 'primary.dark', color: 'primary.main'}}>
                <SideBar />
              </Box>
              <Box component="div" my={2} flex='4'>
                {children}
              </Box>
           </Box>
           
          <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} />
         </ThemeProvider>
    </>
  )
}
