//React Imports
import React, { useContext } from "react";

// MUI Imports
import { Grid, Fab, Modal, Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";

//App Imports
import { DataContext } from "../contexts/data-context";
import { InitiativeCard, FormCreateInitiative } from "./index";

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const { currentGroup, initiatives } = useContext(DataContext);

  // Functions - Create initiative Button
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true) };
    const handleClose = () => {setOpen(false) };
  

  return (
    <div>
      <Fab
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerToggle}
        sx={{
          mr: 2,
          display: { lg: "none" },
          position: "fixed",
          top: "16px",
          left: "16px",
          zIndex: 1
        }}
      >
        <MenuIcon />
      </Fab>

      {/* ---> Image <--- */}

      <img
        src={currentGroup.image}
        alt={currentGroup.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      {/* ---> Initiative tiles <--- */}

      <Grid
        sx={{
          flexGrow: 1,
          padding: "20px",
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
        }}
        container
        spacing={{ xs: 2, md: 2 }}

        justifyContent="center"
      >
        {initiatives.map((initiative) => (
          <InitiativeCard initiative={initiative} />
        ))}
      </Grid>

      {/* ---> Button - Create new Initiative <--- */}

      <Fab
        color="primary"
        style={{ position: "fixed", bottom: 40, right: 40 }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <FormCreateInitiative setOpen={setOpen}/>
      </Dialog>

      
    </div>
  );
};

export default InitiativesList;
