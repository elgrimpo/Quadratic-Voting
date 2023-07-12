//React Imports
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import NiceModal from "@ebay/nice-modal-react";


//MUI Imports
import {
  Box,
  List,
  Paper,
  ListItemButton,
  ListItemText,
} from "@mui/material";

//App Imports
import { GroupsSection, FormCreateGroup } from "../index.js";

import { selectGroups } from "../../reducers/groupsSlice";
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";
import { fx } from "../../utils";

/* ----------- COMPONENT -------------- */

function GroupsNav(props) {
  //state variables
  const groups = useSelector(selectGroups);
  let { groupId, communityName } = useParams();
  const currentGroup = fx.data.findById(groups, groupId);
  const currentCommunity = useSelector(selectCurrentCommunity)

  const communityGroups = groups.filter(
    (group) => group.communityId === currentCommunity?._id
  );
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
    </Box>
  );
}

export default GroupsNav;
