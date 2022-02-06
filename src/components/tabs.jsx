//React Imports
import React from "react";

//MUI Imports
import { AppBar, Tab, IconButton, Toolbar, Box } from "@mui/material";
import TabList from "@mui/lab/TabList";
import MenuIcon from "@mui/icons-material/Menu";

//App Imports

/* ----------- COMPONENT -------------- */

function TabNav(props) {
  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  return (
 


    <AppBar
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 2,
      }}
      sx={{ display: "flex", bgcolor: "background.paper" }}
    >
     
     <IconButton
    size="large"
    aria-label="menu"
    sx={{ mr: 2, display: { lg: "none" },
  position: 'fixed',
top: '0px',
left: '16px', 
zIndex: 1}}
    onClick={props.handleDrawerToggle}
  >
    <MenuIcon />
  </IconButton>

        <TabList centered onChange={handleChange} sx={{justifySelf: 'center'}}>
          <Tab label="Overview" value="Overview" />
          <Tab label="Chat" value="Chat" />
          <Tab label="Bounties" value="Bounties" />
        </TabList>

    </AppBar>

  );
}

export default TabNav;
