//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Grid, Box, Fab, AppBar, Divider, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

function TabNav() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", position: 'sticky', top:0, zIndex:'1'}}>
      <AppBar
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Overview" />
          <Tab label="Comments" />
          <Tab label="Bounties" />
        </Tabs>
      </AppBar>
      <Divider />
    </Box>
  );
}

export default TabNav;
