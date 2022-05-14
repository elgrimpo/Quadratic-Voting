//React Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NiceModal from "@ebay/nice-modal-react";

//MUI Imports
import { Typography, Box, Button, Paper, Card, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


//App Imports
import { CommunitySidebar, ConfirmationDialog, FormCreateCommunity } from "../index"; //TODO: Create GroupSidebar
import { deleteCommunity, selectCurrentCommunity, selectCommunities } from "../../reducers/communitiesSlice";
import { selectGroups, deleteGroup } from "../../reducers/groupsSlice";
import { selectInitiatives, deleteInitiative } from "../../reducers/initiativesSlice";

import {
  fetchCurrentUser,
  selectCurrentUser,
  updateUser,
} from "../../reducers/usersSlice";
import { fx } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

/* ----------- COMPONENT -------------- */

const CommunityDetails = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const currentCommunity = useSelector(selectCurrentCommunity);
  const communities = useSelector(selectCommunities);

  const currentUser = useSelector(selectCurrentUser);
  const groups = useSelector(selectGroups)
  const initiatives = useSelector(selectInitiatives)
  const isSubscribed = fx.subscriptions.checkSubscription(
    currentUser,
    currentCommunity
  );
  const isMember = fx.subscriptions.checkMembership(currentUser,
    currentCommunity);


  const handleSubscriptionUpdate = async () => {
    const response = fx.subscriptions.updateSubscription(
      currentUser,
      currentCommunity
    );
    await dispatch(updateUser(response.newUser));
    await dispatch(fetchCurrentUser());
  };

  
  const showCommunityUpdate = () => {
    NiceModal.show(FormCreateCommunity, {
      type: "update",
      content: currentCommunity,
    });
  };

  const handleDelete = () => {
    const communityGroups = groups.filter(group => group.communityId === currentCommunity._id)
    const communityInitiatives = initiatives.filter(initiative => initiative.communityId === currentCommunity._id)
    communityGroups.forEach(group => dispatch(deleteGroup(group)))
    communityInitiatives.forEach(initiative => dispatch(deleteInitiative(initiative)))
    dispatch(deleteCommunity(currentCommunity));
    navigate(`/${communities[0].name}/overview`);
    enqueueSnackbar("Community successfully deleted", {
      variant: "success",
    });
  }

  const showConfirmDeletion = () => {
    NiceModal.show(ConfirmationDialog, {
      title: "Delete Community?",
      content:
        "This will permanently delete this community as well as its groups and initiatives from the database. Are you sure you want to delete the community?",
      actionText: "Delete",
      action: () => handleDelete(),
    });
  };


  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          lg: "1fr 320px",
          md: "1fr 320px",
          sm: "1fr",
        },
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <Paper
          elevation={5}
          sx={{
            borderRadius: 0,
            overflow: { sm: "visible", md: "scroll", lg: "scroll" },
          }}
        >
          <img
            className="banner-image"
            src={currentCommunity?.banner_url}
            alt={currentCommunity?.name}
          />

          <Box
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            <Typography variant="h4">{currentCommunity?.name}</Typography>
            <Typography variant="h7">{currentCommunity?.headline}</Typography>

            {/* User Actions*/}

            {/* Subscribe */}
            <Box
              style={{
                paddingTop: 10,
                paddingRight: 30,
                marginBottom: "30px",
              }}
            >
              {isSubscribed ? (
                <Button
                  variant="outlined"
                  startIcon={<CheckIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={() => handleSubscriptionUpdate()}
                >
                  Subscribed
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<BookmarkIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={() => handleSubscriptionUpdate()}
                >
                  Subscribe
                </Button>
              )}

              {isMember ? (
                <Button
                  variant="outlined"
                  startIcon={<CheckIcon />}
                  style={{ marginRight: "10px" }}
                >
                  Member
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<GroupAddIcon />}
                  style={{ marginRight: "10px" }}
                >
                  Become member
                </Button>
              )}

              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                style={{ marginRight: "10px" }}
                onClick={showCommunityUpdate}
              >
                Update Community
              </Button>
              <Button
                variant="outlined"
                startIcon={<DeleteForeverIcon />}
                style={{ marginRight: "10px" }}
                onClick={showConfirmDeletion}
              >
                Delete Community
              </Button>

            </Box>
          </Box>
          <Card
            sx={{
              margin: "20px",
              padding: "20px",
              backgroundColor: "#ffffff",
              border: "1px solid #E0E0E0",
            }}
            variant="outlined"
          >
            <Typography variant="h6" sx={{ mb: "20px" }}>
              Overview
            </Typography>
            <Typography>{currentCommunity?.description}</Typography>
          </Card>
        </Paper>
      </ThemeProvider>
      <Box>
        <CommunitySidebar />
      </Box>
    </Box>
  );
};

export default CommunityDetails;
