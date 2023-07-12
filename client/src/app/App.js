//React Imports
import "stream-chat-react/dist/css/index.css";
import "../styles/App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StreamChat } from "stream-chat";

//MUI Imports
import { Box } from "@mui/material";

//App Imports
import {
  InitiativesList,
  InitiativeDetails,
  Layout,
  Login,
  CommunityDetails,
  ExploreCommunities,
} from "../features";
import { fetchCurrentUser, selectCurrentUser } from "../reducers/usersSlice";
import {
  selectCommunityLoadingStatus,
  selectCurrentCommunity,
} from "../reducers/communitiesSlice";

import { ability } from "../features/components/Can";
import defineRulesFor from "../config/abilities";
import axios from "axios";

/* ----------- COMPONENT -------------- */

function App(props) {
  // API's
  const dispatch = useDispatch();
  const [chatClient, setChatClient] = useState(null);

  // Variables
  const [isBusy, setBusy] = useState(true);
  const currentUser = useSelector(selectCurrentUser);
  const initialCommunity = useSelector(selectCurrentCommunity);
  const communityStatus = useSelector(selectCommunityLoadingStatus);

  // Loading functions
  useEffect(() => {
    setBusy(true);
    dispatch(fetchCurrentUser());
    setBusy(false);
  }, [dispatch]);


    //Loading user permissions
  useEffect(() => { 
    ability.update(defineRulesFor(currentUser));
  },[currentUser])


  // Drawer functions
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  if (isBusy) {
    return <div>Busy</div>;
  }

  return (
      <Box sx={{ height: "100 vh" }}>
        <Routes>
          {/* ---> Navigation <--- */}
          {communityStatus === "success" ? (
            <Route
              path="/"
              element={<Navigate to={`/${initialCommunity?.name}`} replace />}
            />
          ) : (
            ""
          )}

          <Route path="login" element={<Login />} />

          <Route path="explore" element={<ExploreCommunities />}></Route>
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
            <Route path="" element={<Navigate to={`overview`} />} />

            {/* ---> Main Content: Community Details <--- */}
            <Route
              path="overview"
              element={
                <CommunityDetails handleDrawerToggle={handleDrawerToggle} />
              }
            />

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
  );
}

export default App;
