//React Imports
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";

//MUI Imports
import {
  Box,
  List,
  Paper,
  ListItemButton,
  ListItemText,
} from "@mui/material";

//App Imports
import { GroupsSection } from "../index.js";

import { selectGroups } from "../../reducers/groupsSlice";
import { selectCommunities } from "../../reducers/communitiesSlice";
import {
  selectChannels,
  selectCurrentChannel,
} from "../../reducers/channelsSlice";
import { findById } from "../../utils/find-by-id";

/* ----------- COMPONENT -------------- */

function GroupsNav(props) {
  //state variables
  const groups = useSelector(selectGroups);
  let { groupId, communityName } = useParams();
  const currentGroup = findById(groups, groupId);
  const communities = useSelector(selectCommunities);
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );
  const communityGroups = groups.filter(
    (group) => group.communityId === currentCommunity._id
  );
  const channels = useSelector(selectChannels);
  const currentChannel = useSelector(selectCurrentChannel);
  const location = useLocation()

  return (
    <Box id="main-nav-panel">
      {/* ---> Community Menu <---*/}

      <div>
        {/* Community Overview */}
        <List sx={{ paddingTop: 0, mb: "20px" }} dense={true}>
          <Paper id="groupsection-backgroud" elevation={3}>
            <Link
              to={`/${communityName}/overview`}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton selected={location.pathname === `/${communityName}/overview`}>
                <ListItemText primary={currentCommunity?.name} />
              </ListItemButton>
            </Link>
          </Paper>
        </List>
      </div>

      {/* ---> Group Selection <--- */}

      <GroupsSection
        items={communityGroups}
        title="Groups"
        currentItem={currentGroup}
      />

      {/* ---> Channel Selection <--- */}

      <GroupsSection
        items={channels}
        title="Channels"
        currentItem={currentChannel}
      />
    </Box>
  );
}

export default GroupsNav;
