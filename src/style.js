import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';




const theme = createTheme({  
    palette: {
      type: 'dark',
      primary: {
        main: '#ff8f00',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#310000',
        paper: '#731010',
      },
    },
    typography: {
      fontFamily: 'Do Hyeon',
    },
    shape: {
      borderRadius: 16,
    }
  })

  export default theme
