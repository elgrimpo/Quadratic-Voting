import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import { darkTheme } from './styles/themeProvider'
import { Provider } from 'react-redux';
import {store} from './app/store'
import NiceModal from "@ebay/nice-modal-react"
import { SnackbarProvider } from 'notistack';
import {initializeData} from './utils/initialize-data';



initializeData()


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter> 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <React.StrictMode>
    <SnackbarProvider maxSnack={3} anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}>
    <NiceModal.Provider>
      <App />
    </NiceModal.Provider>
    </SnackbarProvider>
    </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);


