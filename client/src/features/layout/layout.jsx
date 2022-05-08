//React Imports
import React from "react";
import { Outlet } from "react-router-dom";


//MUI Imports
import { Box, Drawer } from "@mui/material";

//App Imports
import {
  Communities,
  GroupsNav,
} from "..";

/* ----------- COMPONENT -------------- */

function Layout(props) {

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
