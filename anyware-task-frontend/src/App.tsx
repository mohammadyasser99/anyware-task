import Sidebar from './components/sidebar'


import { createTheme } from '@mui/material/styles';

import './App.css'
import { ThemeProvider } from '@emotion/react';
import Banner from './components/banner';

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(354deg, rgba(255,255,255,1) 0%, rgba(32,101,130,1) 35%, rgba(46,122,140,1) 74%, rgba(56,136,147,1) 100%)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'white',
        }
      }
    }
  }
});

function App() {
 
  

  return (
   <ThemeProvider theme={theme}>

<Sidebar />
{/* <Banner /> */}


    </ThemeProvider>
  )
}

export default App
