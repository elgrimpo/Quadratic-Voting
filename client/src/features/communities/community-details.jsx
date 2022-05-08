//React Imports
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { subject } from "@casl/ability";

//MUI Imports
import {
  Typography,
  Box,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  Snackbar,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Can from "../components/Can";

//App Imports
import { TabNav, Chat, Sidebar, FormCreateInitiative } from "../index";
import {
  selectGroupInitiatives,
  selectInitiatives,
  removeCurrentInitiativeSelection,
  deleteInitiative,
} from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { findById } from "../../utils/find-by-id";
import { selectCommunities } from "../../reducers/communitiesSlice";

/* ----------- COMPONENT -------------- */

const CommunityDetails = () => {
  let { groupId, communityName, initiativeId } = useParams();
  const initiatives = useSelector(selectInitiatives);
  const groups = useSelector(selectGroups);
  const currentInitiative = findById(initiatives, initiativeId);
  const communities = useSelector(selectCommunities);
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );

  const theme = useTheme();

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
              marginTop: "30px"
            }}
          >
            <Typography variant="h4">{currentCommunity?.name}</Typography>
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
