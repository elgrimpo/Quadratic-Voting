import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const themeOptions = [
  {
    mode: 'light',
    palette: { 
      primary: {
        main: '#F#2C7772',
      }
     }
  },
  {
    mode: 'dark',
    palette: { 
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
    divider: 'rgba(206,206,206,0.12)', }
  }
];




export const chooseTheme = (mode1) => {
  createTheme(
   themeOptions.find((theme) => theme.mode = mode1)
  )
}


