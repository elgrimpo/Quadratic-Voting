//React Imports
import "../styles/App.css";
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useMatch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

//MUI Imports
import { Box } from "@mui/material";

//App Imports
import { InitiativesList, InitiativeDetails, Layout, Login } from "../features";
import { fetchInitiatives } from "../reducers/initiativesSlice";
//TODO: remove loading statuses from redux store
import { selectInitiativeLoadingStatus } from "../reducers/initiativesSlice";
import { fetchCurrentUser, selectUserLoadingStatus } from "../reducers/usersSlice";
import {
  selectCommunityLoadingStatus,
  selectCommunities,
} from "../reducers/communitiesSlice";
import { selectGroupLoadingStatus } from "../reducers/groupsSlice";
import { selectGroups } from "../reducers/groupsSlice";

/* ----------- COMPONENT -------------- */

function App(props) {
  const dispatch = useDispatch();

  // Drawer functions
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Identify initial Group for redirecting
  const communities = useSelector(selectCommunities);
  const groups = useSelector(selectGroups);
  const communityName = useMatch(":communityName/*")?.params.communityName;
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );
  const communityGroups = groups.filter(
    (group) => group.communityID === currentCommunity?._id
  );


  //TODO: be checked if actually needed??
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  let firstGroupId = communityGroups[0]?._id;


  return (
    <Box sx={{ height: "100 vh" }}>
      <Routes>

        {/* ---> Navigation <--- */}
        <Route path="login" element={<Login />} />
        
        <Route
          path=":communityName"
          element={
            <Layout
              props={props}
              drawerOpen={drawerOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
          }
        >
          <Route path="" element={<Navigate to={`group/${firstGroupId}`} />} />

          {/* ---> Main Content: Initiative List <--- */}
          <Route
            path="group/:groupId"
            element={
              <InitiativesList handleDrawerToggle={handleDrawerToggle} />
            }
          />

          {/* ---> Main Content: Initiative Details <--- */}
          <Route
            path="group/:groupId/initiative/:initiativeId"
            element={
              <InitiativeDetails handleDrawerToggle={handleDrawerToggle} />
            }
          />
        </Route>
      </Routes>
    </Box>
  )
}

export default App;
