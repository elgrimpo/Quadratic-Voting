//React Imports
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//MUI Imports
import { Typography, Box, Button, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

//App Imports
import { Sidebar } from "../index";
import { selectCommunities } from "../../reducers/communitiesSlice";

/* ----------- COMPONENT -------------- */

const CommunityDetails = () => {
  let { communityName } = useParams();
  const communities = useSelector(selectCommunities);
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );

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
            alt={currentCommunity?.name.toString()}
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
              >
                Become member
              </Button>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default CommunityDetails;