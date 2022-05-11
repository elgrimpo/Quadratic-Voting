// React/Redux Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { subject } from "@casl/ability";
import NiceModal from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";

// MUI Imports
import { Grid, Fab, Box, Paper, Typography, Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

// App Imports
import {
  InitiativeCard,
  FormCreateInitiative,
  Sidebar,
  FormCreateGroup,
  ConfirmationDialog,
  CommunityCard,
} from "../index.js";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { selectGroups, deleteGroup } from "../../reducers/groupsSlice";
import { lightTheme } from "../../styles/themeProvider";
import { findById } from "../../utils/find-by-id";
import Can from "../components/Can";
import {
  selectCommunities,
  selectCurrentCommunity,
} from "../../reducers/communitiesSlice.js";
import * as api from "../../api";

/* ----------- COMPONENT -------------- */

const ExploreCommunities = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [communities, setCommunities] = useState([{}]);
  useEffect(async () => {
    let isLoaded = false;
    if (!isLoaded) {
      try {
        await api
          .fetchAllCommunities()
          .then((response) => setCommunities(response.data))
          .then((isLoaded = true));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleSubscribe = (item) => {
    // let newUser = Object.Create(currentUser)
    // user.subscriptions.push({communityId: item._id})
    // dispatch(updateUser(newUser))
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        style={{
          width: "100%",
        }}
      >
        {/* ---> Title <--- */}
        <Box
          sx={{ maxWidth: { lg: "1000px" } }}
          style={{
            paddingLeft: 30,
            paddingRight: 30,

            margin: "80px auto 20px auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            style={{ color: "black", marginTop: "80px" }}
          >
            Explore Communities
          </Typography>
        </Box>

        {/* ---> Initiative tiles <--- */}
        <Box id="initiatives-grid" sx={{ maxWidth: { lg: "1000px" } }}>
          {communities.map((community, index) => (
            <CommunityCard
              key={`${index} ${community._id}`}
              community={community}
            >
              {community.name}
            </CommunityCard>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ExploreCommunities;
