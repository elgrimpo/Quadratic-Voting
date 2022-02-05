import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import {darkTheme, lightTheme} from './styles/themeProvider'



ReactDOM.render(
  <BrowserRouter> 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
