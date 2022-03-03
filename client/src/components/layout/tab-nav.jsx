//React Imports
import React from "react";

//MUI Imports
import { AppBar, Tab, IconButton } from "@mui/material";
import TabList from "@mui/lab/TabList";
import MenuIcon from "@mui/icons-material/Menu";

//App Imports

/* ----------- COMPONENT -------------- */

// Manage tab change
function TabNav(props) {
  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  return (
    <AppBar
      id='app-bar'
      sx={{ bgcolor: "background.paper" }}
    >
      <IconButton
        id='menu-icon'
        size="large"
        aria-label="menu"
        sx={{ display: { lg: "none" } }}
        onClick={props.handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      <TabList centered onChange={handleChange} sx={{ justifySelf: "center" }}>
        <Tab label="Overview" value="Overview" />
        <Tab label="Chat" value="Chat" />
        <Tab label="Bounties" value="Bounties" />
      </TabList>
    </AppBar>
  );
}

export default TabNav;
