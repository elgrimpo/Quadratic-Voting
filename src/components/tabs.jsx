//React Imports
import React from "react";

//MUI Imports
import { AppBar, Tab } from "@mui/material";
import TabList from "@mui/lab/TabList";

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
      }}
      sx={{ bgcolor: "background.paper" }}
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
