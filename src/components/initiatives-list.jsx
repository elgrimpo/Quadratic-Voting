//React Imports
import React, { useContext } from "react";

// MUI Imports
import { Grid, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";
import { InitiativeCard } from "./index";

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const { currentGroup, initiatives, setCurrentInitiative } =
    useContext(DataContext);
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <img
        src={currentGroup.image}
        alt={currentGroup.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {initiatives.map((initiative) => (
            <InitiativeCard initiative={initiative} />
          ))}
        </Grid>
      </Box>
      <Fab color="primary" style={{ position: "fixed", bottom: 40, right: 40 }}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default InitiativesList;
