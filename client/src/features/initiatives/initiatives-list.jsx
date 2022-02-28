// React/Redux Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';


// MUI Imports
import { Grid, Fab, Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from '@mui/material/styles';

// App Imports
import { InitiativeCard, FormCreateInitiative } from "../../components/index";
import { selectCurrentInitiative, selectGroupInitiatives } from '../../store/initiatives/initiativesSlice'
import {selectCurrentGroup} from '../../store/groups/groupsSlice'


/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {

  const currentInitiative = useSelector(selectCurrentInitiative);
  const groupInitiatives = useSelector(selectGroupInitiatives);
  const currentGroup = useSelector(selectCurrentGroup);
  console.log(groupInitiatives)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        alt={currentGroup.title.toString()}
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',


          
        }}
   
        container
        spacing={{ xs: 2, md: 2, lg: 2, xl:2 }}
        justifyContent= "center"
      >
        {groupInitiatives.map((initiative, index) => (
          <InitiativeCard key={index+initiative._id} initiative={initiative} />
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

      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullScreen={fullScreen}
        maxWidth='lg'>
          
        <FormCreateInitiative setOpen={setOpen} />
      </Dialog>

      
    </div>
  );
};

export default InitiativesList;
