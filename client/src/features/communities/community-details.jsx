//React Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NiceModal from "@ebay/nice-modal-react";
import CreateCommunity from "./form-community-create"; // created by above code

//MUI Imports
import { Typography, Box, Button, Paper, Card } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CheckIcon from "@mui/icons-material/Check";

//App Imports
import { CommunitySidebar } from "../index"; //TODO: Create GroupSidebar
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";
import { fetchCurrentUser, selectCurrentUser, updateUser } from "../../reducers/usersSlice";
import { fx } from "../../utils";


/* ----------- COMPONENT -------------- */

const CommunityDetails = () => {
  const dispatch = useDispatch();

  const currentCommunity = useSelector(selectCurrentCommunity);
  const currentUser = useSelector(selectCurrentUser);

  //TODO: To be moved to communities-nav
  const showCreateCommunity = () => {
    NiceModal.show(CreateCommunity, { name: "Chris" });
  };

 const isSubscribed = fx.subscriptions.checkSubscription(currentUser, currentCommunity);

 const handleSubscriptionUpdate = async () => {
  const response = fx.subscriptions.updateSubscription(
    currentUser,
    currentCommunity
  );
  await dispatch(updateUser(response.newUser));
  await dispatch(fetchCurrentUser());
};
 

  const checkMembership = () => {
    const index = currentCommunity?.permissions?.findIndex(
      (permission) => permission?.userId === currentUser?._id
    );
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  };

  const isMember = checkMembership();

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
                  onClick={() =>
                    handleSubscriptionUpdate()
                  }
                >
                  Subscribed
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<BookmarkIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={() =>
                    handleSubscriptionUpdate()
                  }
                >
                  Subscribe
                </Button>
              )}

              {isMember ? (
                <Button
                  variant="outlined"
                  startIcon={<CheckIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={showCreateCommunity}
                >
                  Member
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<GroupAddIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={showCreateCommunity}
                >
                  Become member
                </Button>
              )}
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
