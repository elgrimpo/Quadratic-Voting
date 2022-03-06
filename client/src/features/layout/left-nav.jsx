//React Imports
import React, { useEffect, useContext } from "react";
import { Routes, Route, Navigate, useMatch, matchPath, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

//MUI Imports
import { Box, Paper, Drawer } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

//App Imports
import {
  Communities,
  InitiativesList,
  InitiativeDetails,
  MainNav,
  Sidebar,
} from "../../features";




/* ----------- COMPONENT -------------- */

function LeftNav(props) {
  const dispatch = useDispatch();

  // Drawer functions
  const drawer = (
    <Box id="drawer">
      <Communities />
      <MainNav />
    </Box>
  );
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;


  return (
    <Box>
      {/* ---> Navigation <--- */}

      <Drawer
        container={container}
        variant="temporary"
        open={props.drawerOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "#2C7772" },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
      )
      }

      export default LeftNav;