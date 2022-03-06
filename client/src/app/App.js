//React Imports
import "../styles/App.css";
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useMatch, matchPath, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

//MUI Imports
import { Box, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

//App Imports
import {
  Communities,
  InitiativesList,
  InitiativeDetails,
  MainNav,
  Sidebar,
  LeftNav
} from "../features";
import { fetchInitiatives } from "../reducers/initiativesSlice";
import { selectInitiativeLoadingStatus } from "../reducers/initiativesSlice";
import {selectUserLoadingStatus} from "../reducers/usersSlice";
import {selectCommunityLoadingStatus, selectCommunities} from "../reducers/communitiesSlice";
import { selectGroupLoadingStatus } from "../reducers/groupsSlice";
import { lightTheme } from "../styles/themeProvider";


/* ----------- COMPONENT -------------- */

function App(props) {
  const dispatch = useDispatch();
  
  // Drawer functions
  const drawer = (
    <Box id="drawer">
      <Communities />
      <MainNav />
    </Box>
  );
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // Data fetching variables
  const initiativeStatus = useSelector(selectInitiativeLoadingStatus);
  const groupStatus = useSelector(selectGroupLoadingStatus);
  const userStatus = useSelector(selectUserLoadingStatus);
  const communityStatus = useSelector(selectCommunityLoadingStatus);

  //to be checked if actually needed??
  useEffect(() => {
    dispatch(fetchInitiatives());
  }, [dispatch]);

  // Check if data is fetched from database
  let isLoading = true;
  if (initiativeStatus === "success" && groupStatus === "success" && userStatus === "success" && communityStatus === "success") {
    isLoading = false;
  } else {
    isLoading = true;
  }

  return isLoading ? (
    <Box></Box>
  ) : (
    <Box
      id = 'main-grid'
      sx={{
        gridTemplateColumns: {
          lg: "380px 1fr 320px",
          md: "1fr 320px",
          sm: "1fr",
        },
      }}
    >
      {/* ---> Navigation <--- */}

      <LeftNav props={props} drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}/>

      {/* ---> Main Content <--- */}

      <ThemeProvider theme={lightTheme}>
        <Paper
          elevation={5}
          sx={{ borderRadius: 0, overflow: { sm: "visible", md: "scroll", lg: "scroll" } }}
        >
          <Routes>

            <Route
              path="/:communityId/group/:groupId"
              element={
                <InitiativesList handleDrawerToggle={handleDrawerToggle} />
              }
            />
            <Route
              path="/:communityId/group/:groupId/initiative/:initiativeId"
              element={
                <InitiativeDetails handleDrawerToggle={handleDrawerToggle} />
              }
            />
          </Routes>
        </Paper>
      </ThemeProvider>

      {/* ---> Sidebar <--- */}

      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;
