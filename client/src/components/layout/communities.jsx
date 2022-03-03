//React Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//MUI Imports
import {
  Box,
  Card,
  CardMedia,
  Stack,
  CardActionArea,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//App Imports
import { selectCurrentUser } from "../../store/users/usersSlice";
import {
  selectCommunities,
  selectCurrentCommunity,
} from "../../store/communities/communitiesSlice";

/* ----------- COMPONENT -------------- */

const Communities = (props) => {
  const theme = useTheme();
  const currentUser = useSelector(selectCurrentUser);
  const communities = useSelector(selectCommunities);
  const currentCommunity = useSelector(selectCurrentCommunity);

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
    <Box id="communities-panel" sx={{ bgcolor: "background.paper" }}>
      <Stack
        sdirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {/* ---> Community Tiles <--- */}

        {communities.map((community) => (
          <Box
            id="community-tile"
            key={community.id}
            style={
              community.id === currentCommunity.id
                ? { border: `4px solid ${theme.palette.primary.light}` }
                : {}
            }
          >
            <Card sx={{ maxWidth: 50, maxHeight: 50 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="56"
                  image={community.image}
                />
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Stack>

      {/* ---> User profile <--- */}

      <div>
        <Avatar
          id="avatar"
          style={{ border: `2px solid ${theme.palette.primary.light}` }}
          alt={currentUser.id}
          src={currentUser.image}
          onClick={handleClick}
        />

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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Box>
  );
};

export default Communities;
