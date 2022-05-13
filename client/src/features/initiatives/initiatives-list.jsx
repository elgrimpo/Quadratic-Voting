// React/Redux Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { subject } from "@casl/ability";
import NiceModal from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";


// MUI Imports
import { Grid, Fab, Box, Paper, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

// App Imports
import { InitiativeCard, FormCreateInitiative, GroupSidebar, FormCreateGroup, ConfirmationDialog } from "../index.js";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { selectGroups, deleteGroup } from "../../reducers/groupsSlice";
import { lightTheme } from "../../styles/themeProvider";
import { fx } from "../../utils";
import Can from "../components/Can";
import {
  selectCommunities,
  selectCurrentCommunity,
} from "../../reducers/communitiesSlice.js";

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const {groupId, communityName} = useParams();
  const initiatives = useSelector(selectInitiatives);
  const groupInitiatives = initiatives.filter(
    (initiative) => initiative.groupId === groupId
  );
  const groups = useSelector(selectGroups);
  const currentGroup = fx.data.findById(groups, groupId);
  const currentCommunity = useSelector(selectCurrentCommunity);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const showCreateInitiative = () => {
    NiceModal.show(FormCreateInitiative, {
      type: "create",
      content: "",
      groupId: groupId,
    });
  };

  const showCreateGroup = () => {
    NiceModal.show(FormCreateGroup, {
      type: "update",
      content: currentGroup,
    });
  };

  const handleDeleteGroup = () => {
    dispatch(deleteGroup(currentGroup));
    navigate(`/${communityName}/overview`);
    enqueueSnackbar("Group successfully deleted", {
      variant: "success",
    });
  }

  const showConfirmDeletion = () => {
    NiceModal.show(ConfirmationDialog, {
      title: "Delete Group?",
      content:
        "This will permanently delete this group from the database. Are you sure you want to delete the group?",
      actionText: "Delete",
      action: () => handleDeleteGroup()
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
              src={currentGroup?.image_url}
              alt={currentGroup?.title}
            />

            {/* ---> Title and description <--- */}
            <Box
              sx={{ maxWidth: { lg: "1000px" } }}
              style={{
                paddingLeft: 30,
                paddingRight: 30,

                margin: "20px auto 10px auto",
                textAlign: "center",
              }}
            >
              <Typography variant="h4">{currentGroup?.title}</Typography>
              <Typography sx={{ mt: 2 }}>
                {currentGroup?.description}
              </Typography>
            </Box>
            {/* abilitiy */}
            
              {/* Buttons */}
              <Box
                style={{
                  paddingLeft: 30,
                  display: "flex",
                  margin: "20px",
                  justifyContent: "center",
                  columnGap: "10px",
                }}
              >
                <Can
              I="create"
              a={subject(
                "Initiative",
                Object.create(currentCommunity || { waiting: "waiting" })
              )}
            >
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={showCreateInitiative}
                >
                  Create Initiative{" "}
                </Button>
                </Can>

                <Can
              I="manage"
              a={subject(
                "Group",
                Object.create(currentCommunity || { waiting: "waiting" })
              )}
            >
                {/* Update Initiative*/}
                <Button variant="outlined" onClick={showCreateGroup} startIcon={<EditIcon />}>
                  Update Group
                </Button>
                <Button variant="outlined" onClick={showConfirmDeletion} startIcon={<DeleteForeverIcon />}>
                  Delete Group
                </Button>
               </Can> 
              </Box>
            

            {/* ---> Initiative tiles <--- */}

            <Box id="initiatives-grid" sx={{ maxWidth: { lg: "1000px" } }}>
              {groupInitiatives.map((initiative, index) => (
                <InitiativeCard
                  key={index + initiative._id}
                  initiative={initiative}
                />
              ))}
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>

      {/* ---> Sidebar <--- */}
      <Box>
        <GroupSidebar />
      </Box>
    </Box>
  );
};

export default InitiativesList;
