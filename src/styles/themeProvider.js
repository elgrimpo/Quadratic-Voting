

import { createTheme } from '@mui/material/styles';




export const darkTheme = createTheme({  
  palette: {
    type: 'dark',
    primary: {
      main: '#FAFF80',
    },
    secondary: {
      main: '#37DDB0',
    },
    background: {
      paper: '#195458',

    },
    text: {
      primary: '#ffffff',
    },
    divider: 'rgba(206,206,206,0.12)',
  },
  typography: {
    fontFamily: 'Merriweather'
  }
  })

  export const lightTheme = createTheme({  
    palette: {
      type: 'light',
      primary: {
        main: '#A2A800',
      },
      secondary: {
        main: '#A2A800',
      },
      background: {
        paper: '#ffffff',
  
      },
      text: {
        primary: '#383838',
      },
      divider: 'rgba(206,206,206,0.12)',
    },
    })