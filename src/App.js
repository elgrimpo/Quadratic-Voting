//React Imports
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

//MUI Imports
import { Box, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

//App Imports
import {
  Communities,
  InitiativesList,
  InitiativeDetails,
  MainNav,
  Sidebar,
} from "./components";

import { DataProvider } from "./contexts/data-context";
import { lightTheme } from "./styles/themeProvider";

/* ----------- COMPONENT -------------- */

function App() {

  return (
    <DataProvider
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr 320px",
          height: "100%",
          width: "100%",
          background: "linear-gradient(175deg, #2C7772 30%, #264F60 90%)",
        }}
      >
        {/* ---> Navigation <--- */}

        <Box style={{ display: "flex" }}>
          <Communities />
          <MainNav />
        </Box>

        {/* ---> Main Content <--- */}

        <ThemeProvider theme={lightTheme}>
          <Paper
            elevation={5}
            style={{
              height: "100%",
              overflow: "scroll",
              background: "white",
              borderRadius: 0,
            }}
          >
            <Routes>
              <Route path="/" element={<InitiativesList />} />
              <Route
                path="/initiativedetails"
                element={<InitiativeDetails />}
              />
            </Routes>
          </Paper>
        </ThemeProvider>

        {/* ---> Sidebar <--- */}

        <Box id="sidebar">
          <Sidebar />
        </Box>
      </div>
    </DataProvider>
  );
}

export default App;
