//React Imports
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";

//MUI Imports
import { Box, Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//App Imports
import { GroupsSection } from "../index.js";

import {selectGroups} from '../../reducers/groupsSlice'
import { selectCommunities} from '../../reducers/communitiesSlice'
import {selectChannels, selectCurrentChannel} from '../../reducers/channelsSlice'
import {findById} from "../../utils/find-by-id"



/* ----------- COMPONENT -------------- */

function GroupsNav(props) {
  
  //state variables
  const groups = useSelector(selectGroups)
  let { groupId, communityName } = useParams();
  const currentGroup = findById(groups, groupId)
  const communities = useSelector(selectCommunities) 
  const currentCommunity = communities.find((community) => community.name.toLowerCase() === communityName.toLowerCase() )
  const communityGroups = groups.filter((group) => group.communityID === currentCommunity._id)
  const channels = useSelector(selectChannels)
  const currentChannel = useSelector(selectCurrentChannel)




  // Menu controls
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box id="main-nav-panel">
      {/* ---> Community Menu <---*/}

      <div>
        {/* Dropdown Button */}
        <Button
          id="community-menu-dropdown"
          sx={{bgcolor: "background.paper"}}
          onClick={handleClick}
        >
          {currentCommunity?.name}
          <ArrowDropDownIcon sx={{ color: "primary.main" }} />
        </Button>

        {/* Menu items */}

        <Menu
          id="community-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Community Overview</MenuItem>
          <MenuItem onClick={handleClose}>Community Rules</MenuItem>
          <MenuItem onClick={handleClose}>Configurations</MenuItem>
        </Menu>
      </div>

      {/* ---> Group Selection <--- */}

      <GroupsSection 
        items={communityGroups} 
        title="Groups" 
        currentItem={currentGroup} />

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
