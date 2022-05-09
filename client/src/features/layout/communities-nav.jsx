//React Imports
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

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
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";

//App Imports
import {  selectCurrentUser, selectIsLoggedIn } from "../../reducers/usersSlice";
import {
  selectCommunities, selectCurrentCommunity
} from "../../reducers/communitiesSlice";

/* ----------- COMPONENT -------------- */

const Communities = (props) => {
  const theme = useTheme();
  const currentUser = useSelector(selectCurrentUser);
  const communities = useSelector(selectCommunities);
  const currentCommunity = useSelector(selectCurrentCommunity)

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Menu controls
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  const handleLogout= () => {
    window.open("http://localhost:5000/auth/logout", "_self")
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
            key={community._id}
            style={
              community._id === currentCommunity._id
                ? { border: `4px solid ${theme.palette.primary.light}` }
                : {}
            }
          >
            <Link
              key={community._id}
              to={`/${community.name}`} //to be updated
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 50, maxHeight: 50 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="56"
                    image={community.logo_url}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Box>
        ))}
      </Stack>

      {/* ---> User profile <--- */}

      {isLoggedIn ? (
        <div>
          <Avatar
            id="avatar"
            style={{ border: `2px solid ${theme.palette.primary.light}` }}
            alt={currentUser._id}
            src={currentUser.image_url}
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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <div>
          <IconButton aria-label="login" color="primary" sx={{marginBottom:'16px'}} size="large" onClick={handleLogin}>
            <LoginIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}
    </Box>
  );
};

export default Communities;
