// React/Redux Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useParams } from "react-router-dom";

// MUI Imports
import { Grid, Fab, Dialog, Box, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, ThemeProvider } from "@mui/material/styles";

// App Imports
import { InitiativeCard, FormCreateInitiative, Sidebar } from "../index.js";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { lightTheme } from "../../styles/themeProvider";
import { findById } from "../../utils/find-by-id"

/* ----------- COMPONENT -------------- */

const InitiativesList = (props) => {
  const groupId = useParams().groupId;
  const initiatives = useSelector(selectInitiatives)
  const groupInitiatives = initiatives.filter((initiative) => 
    initiative.groupID === groupId);
  const groups = useSelector(selectGroups)
  const currentGroup = findById(groups, groupId)

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Functions - Create initiative Button
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        overflow: 'scroll',
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
              src={currentGroup.image} //to be updated
              alt={currentGroup.title} //to be updated
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

            <Fab id="action-button" color="primary" onClick={handleOpen}>
              <AddIcon />
            </Fab>

            <Dialog
              open={open}
              onClose={handleClose}
              fullScreen={fullScreen}
              maxWidth="lg"
            >
              <FormCreateInitiative setOpen={setOpen} type="create" content=""/>
            </Dialog>
          </Box>
        </Paper>
      </ThemeProvider>

      {/* ---> Sidebar <--- */}
      <Box >
        <Sidebar />
      </Box>
    </Box>
  );
};

export default InitiativesList;
