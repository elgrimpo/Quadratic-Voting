// React/Redux Imports
import React from "react";
import { useSelector } from "react-redux";
import { useMatch, useParams } from "react-router-dom";
import { subject } from "@casl/ability";
import NiceModal from "@ebay/nice-modal-react";

// MUI Imports
import { Grid, Fab, Box, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";

// App Imports
import { InitiativeCard, FormCreateInitiative, Sidebar } from "../index.js";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { lightTheme } from "../../styles/themeProvider";
import { findById } from "../../utils/find-by-id";
import Can from "../components/Can";
import { selectCommunities } from "../../reducers/communitiesSlice.js";

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const groupId = useParams().groupId;
  const initiatives = useSelector(selectInitiatives);
  const groupInitiatives = initiatives.filter(
    (initiative) => initiative.groupId === groupId
  );
  const groups = useSelector(selectGroups);
  const currentGroup = findById(groups, groupId);
  // TODO: Put into App.js (dispatch update currentCommunity)
  const communities = useSelector(selectCommunities);
  const communityName = useMatch(":communityName/*").params.communityName;
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );

  const showCreateInitiative = () => {
    NiceModal.show(FormCreateInitiative, {type: "create", content: "", groupId: groupId, communityName: communityName});
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
        overflow: "scroll",
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
          <Box>
            <Fab
              id="menu-button"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ display: { lg: "none" } }}
            >
              <MenuIcon />
            </Fab>

            {/* ---> Image <--- */}

            <img
              className="banner-image"
              src={currentGroup?.image_url} //to be updated
              alt={currentGroup?.title} //to be updated
            />

            {/* ---> Initiative tiles <--- */}

            <Grid id="initiatives-grid" container spacing={2}>
              {groupInitiatives.map((initiative, index) => (
                <InitiativeCard
                  key={index + initiative._id}
                  initiative={initiative}
                />
              ))}
            </Grid>

            {/* ---> Button - Create new Initiative <--- */}
            <Can
              I="vote"
              a={subject(
                "Community",
                Object.create(currentCommunity || { waiting: "waiting" })
              )}
            >
              <Fab
                id="action-button"
                color="primary"
                onClick={showCreateInitiative}
              >
                <AddIcon />
              </Fab>
            </Can>
          </Box>
        </Paper>
      </ThemeProvider>

      {/* ---> Sidebar <--- */}
      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default InitiativesList;
