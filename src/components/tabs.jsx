//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Grid, Box, Fab, AppBar, Divider, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TabList from "@mui/lab/TabList";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

function TabNav(props) {

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  return (
    <AppBar
    style={{
      position: "sticky",
      top: 0,
      width: "100%",
    }}
    sx={{bgcolor: 'background.paper'}}
  >
    <TabList centered onChange={handleChange}>
      <Tab label="Overview" value="Overview" />
      <Tab label="Chat" value="Chat" />
      <Tab label="Bounties" value="Bounties" />
    </TabList>
  </AppBar>
  );
}

export default TabNav;
