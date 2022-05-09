//React Imports
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NiceModal from '@ebay/nice-modal-react';
import CreateCommunity from './form-community-create'; // created by above code


//MUI Imports
import { Typography, Box, Button, Paper, Card } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

//App Imports
import { Sidebar } from "../index";
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";

/* ----------- COMPONENT -------------- */

const CommunityDetails = () => {
  const currentCommunity = useSelector(selectCurrentCommunity)

  //TODO: To be moved to communities-nav
  const showCreateCommunity = () => {
    NiceModal.show(CreateCommunity, {name: 'Chris'})
  }

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
              <Button
                variant="outlined"
                startIcon={<BookmarkIcon />}
                style={{ marginRight: "10px" }}
              >
                Subscribe
              </Button>

              <Button
                variant="outlined"
                startIcon={<GroupAddIcon />}
                style={{ marginRight: "10px" }}
                onClick={showCreateCommunity}
              >
                Become member
              </Button>
            </Box>
          </Box>
          <Card sx={{ margin: "20px", padding: "20px", backgroundColor: "#ffffff", border: "1px solid #E0E0E0"}} variant="outlined">
              <Typography variant="h6" sx={{mb: "20px"}}>
                Overview
              </Typography>
              <Typography>
                {currentCommunity?.description}
              </Typography>
          </Card>
        </Paper>
      </ThemeProvider>
      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default CommunityDetails;
