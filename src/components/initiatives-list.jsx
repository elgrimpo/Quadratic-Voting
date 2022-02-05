//React Imports
import React, { useContext } from "react";

// MUI Imports
import { Grid, Box, Fab, AppBar, Divider, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";
import { InitiativeCard, Sidebar, Chat } from "./index";

import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../styles/themeProvider";

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const { currentGroup, initiatives, setCurrentInitiative, users } =
    useContext(DataContext);

  return (
    <div>
      <img
        src={currentGroup.image}
        alt={currentGroup.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <Grid
        sx={{
          flexGrow: 1,
          padding: "20px",
        }}
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {initiatives.map((initiative) => (
          <InitiativeCard initiative={initiative} />
        ))}
      </Grid>

      <Fab color="primary" style={{ position: "fixed", bottom: 40, right: 40 }}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default InitiativesList;
