//React Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import NiceModal from "@ebay/nice-modal-react";


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
import ExploreIcon from "@mui/icons-material/Explore";
import AddIcon from '@mui/icons-material/Add';

//App Imports
import { selectCurrentUser, selectIsLoggedIn } from "../../reducers/usersSlice";
import {
  selectCommunities,
  updateCurrentCommunity,
} from "../../reducers/communitiesSlice";
import {ExploreCommunities, FormCreateCommunity} from "../index"
import { fetchGroups } from "../../reducers/groupsSlice";


/* ----------- COMPONENT -------------- */

const Communities = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const communities = useSelector(selectCommunities);
  const communityName = useMatch(":communityName/*")?.params.communityName;
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );
  useEffect(() => {
    dispatch(updateCurrentCommunity(currentCommunity));
    dispatch(fetchGroups({communityId: currentCommunity?._id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCommunity]);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Menu controls
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    window.open("https://quadratic-voting.onrender.com/auth/google", "_self");
  };
  const handleLogout = () => {
    window.open("https://quadratic-voting.onrender.com/auth/logout", "_self");
    setAnchorEl(null);
  };

  const showExploreCommunities = () => {
    NiceModal.show(ExploreCommunities, {});
  };

  const showCreateCommunity = () => {
    NiceModal.show(FormCreateCommunity, {
      type: "create",
      content: "",
    });
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
              community._id === currentCommunity?._id
                ? { border: `4px solid ${theme.palette.primary.light}` }
                : {}
            }
          >
            <Link
              key={community._id}
              to={`/${community.name}`} //TODO: to be updated
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 50, maxHeight: 50 }} key={community._id}>
                <CardActionArea key={community._id}>
                  <CardMedia
                    component="img"
                    height="56"
                    image={community.logo_url}
                    key={community._id}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Box>
        ))}
        <IconButton aria-label="explore" color="primary" size="large" onClick={showExploreCommunities}>
          <ExploreIcon />
        </IconButton>
        <IconButton aria-label="explore" color="primary" size="large" onClick={showCreateCommunity}>
          <AddIcon />
        </IconButton>
      </Stack>

      {/* ---> User profile <--- */}

      {isLoggedIn ? (
        <div>
          <Avatar
            id="avatar"
            style={{ border: `2px solid ${theme.palette.primary.light}` }}
            alt={currentUser._id}
            src={currentUser.image_url}
            onClick={handleMenuOpen}
          />

          <Menu
            id="community-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <div>
          <IconButton
            aria-label="login"
            color="primary"
            sx={{ marginBottom: "16px" }}
            size="large"
            onClick={handleLogin}
          >
            <LoginIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}
    </Box>
  );
};

export default Communities;
