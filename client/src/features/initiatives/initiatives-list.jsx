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
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Functions - Create initiative Button
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true) };
    const handleClose = () => {setOpen(false) };
  

  return (
    <div>
   
      <Fab
        className= 'menu-button'
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerToggle}
        sx={{ display: { lg: "none" } }}
      >
        <MenuIcon />
      </Fab>

      {/* ---> Image <--- */}

      <img
        className = 'banner-image'
        src={currentGroup.image}
        alt={currentGroup.title.toString()}
      />

      {/* ---> Initiative tiles <--- */}

      <Grid
        id = 'initiatives-grid'
        container
        spacing = {2}
      >
        {groupInitiatives.map((initiative, index) => (
          <InitiativeCard key={index+initiative._id} initiative={initiative} />
        ))}
      </Grid>

      {/* ---> Button - Create new Initiative <--- */}

      <Fab
        id = 'action-button'
        color="primary"
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
