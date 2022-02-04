//React Imports
import React, { useContext } from "react";

// MUI Imports
import { Grid, Box, Fab, AppBar, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";
import { InitiativeCard, Sidebar, Chat } from "./index";

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const { currentGroup, initiatives, setCurrentInitiative, users } =
    useContext(DataContext);
  const theme = useTheme();
  const owner = users.filter((user) => user.id === currentGroup.owner);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1px 350px",
      }}
    >
      <Box
        style={{
          height: "100%",
          overflow: "scroll",
        }}
      >
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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {initiatives.map((initiative) => (
            <InitiativeCard initiative={initiative} />
          ))}
        </Grid>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box id="sidebar" style={{ display: "flex" }}>
        <Sidebar
          title={currentGroup.title}
          description={currentGroup.description}
          owner={owner[0].image}
        />
      </Box>
      <Fab color="primary" style={{ position: "fixed", bottom: 40, right: 40 }}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default InitiativesList;
