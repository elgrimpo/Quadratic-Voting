//React Imports
import React, { useEffect, useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
  useMatch,
  matchPath,
  useLocation,
  Outlet,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

//MUI Imports
import { Box, Paper, Drawer } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

//App Imports
import {
  Communities,
  InitiativesList,
  InitiativeDetails,
  GroupsNav,
  Sidebar,
} from "..";

/* ----------- COMPONENT -------------- */

function Layout(props) {
  const dispatch = useDispatch();

  // Drawer functions
  const drawer = (
    <Box id="drawer">
      <Communities />
      <GroupsNav />
    </Box>
  );
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      id="main-grid"
      sx={{
        gridTemplateColumns: {
          lg: "380px 1fr",
          md: "1fr",
          sm: "1fr",
        },
        height: '100 vh'
      }}
    >
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
      <Outlet />
    </Box>
  );
}

export default Layout;
