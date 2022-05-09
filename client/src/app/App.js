//React Imports
import "../styles/App.css";
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMatch, useParams } from "react-router-dom";


//MUI Imports
import { Box } from "@mui/material";

//App Imports
import { InitiativesList, InitiativeDetails, Layout, Login, CommunityDetails } from "../features";
import { fetchCurrentUser, selectCurrentUser } from "../reducers/usersSlice";
import { selectCommunities, updateCurrentCommunity } from "../reducers/communitiesSlice";

import { ability } from '../features/components/Can'
import defineRulesFor from '../config/abilities'

/* ----------- COMPONENT -------------- */

function App(props) {
  const dispatch = useDispatch();

  // Drawer functions
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const currentUser = useSelector(selectCurrentUser)
  const communities = useSelector(selectCommunities);
  const communityName = useMatch(":communityName/*").params.communityName;
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    ability.update(defineRulesFor(currentUser))}, 
    [currentUser])

  useEffect(() => {
    dispatch(updateCurrentCommunity(currentCommunity));
  }, [currentCommunity])


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
  )
}

export default App;
