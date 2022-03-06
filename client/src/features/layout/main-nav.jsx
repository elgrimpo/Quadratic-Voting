//React Imports
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";

//MUI Imports
import { Box, Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//App Imports
import { NavSection } from "../index.js";

import {selectGroups, selectCurrentGroup} from '../../reducers/groupsSlice'
import { selectCurrentCommunity} from '../../reducers/communitiesSlice'
import {selectChannels, selectCurrentChannel} from '../../reducers/channelsSlice'



/* ----------- COMPONENT -------------- */

function MainNav(props) {
  
  //state variables
  const groups = useSelector(selectGroups)
  const currentGroup = useSelector(selectCurrentGroup)
  const currentCommunity = useSelector(selectCurrentCommunity)
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
          {currentCommunity.name}
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

      <NavSection 
        items={groups} 
        title="Groups" 
        currentItem={currentGroup} />

      {/* ---> Channel Selection <--- */}

      <NavSection
        items={channels}
        title="Channels"
        currentItem={currentChannel}
      />
    </Box>
  );
}

export default MainNav;
