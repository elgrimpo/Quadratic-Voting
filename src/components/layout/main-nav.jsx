//React Imports
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

//MUI Imports
import { Box, Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//App Imports
import { NavSection } from "../index";

import {selectGroups, selectCurrentGroup} from '../../store/groups/groupsSlice'
import { selectCurrentCommunity} from '../../store/communities/communitiesSlice'
import {selectChannels, selectCurrentChannel} from '../../store/channels/channelsSlice'



/* ----------- COMPONENT -------------- */

function MainNav(props) {
  
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
    <Box id="main-nav" sx={{ paddingTop: "16px", width:'300px' }}>
      {/* ---> Community Menu <---*/}

      <div>
        {/* Dropdown Button */}
        <Button
          id="community-menu"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mt: 1,
            borderRadius: 2,
            bgcolor: "background.paper",
            mb: "20px",
            padding: 2,
            boxShadow: "0px 1px 0px 2px rgba(0, 0, 0, 0.1)",
          }}
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
