import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import {darkTheme, lightTheme} from './styles/themeProvider'
import { Provider } from 'react-redux';
import {store} from './store/store'


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter> 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);


