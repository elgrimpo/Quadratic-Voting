//React Imports
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//App Imports
import { TabNav, Chat, Sidebar } from "../index";
import {
  selectGroupInitiatives,
  selectInitiatives,
  removeCurrentInitiativeSelection,
  deleteInitiative,
} from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { findById } from "../../utils/find-by-id";
import { border } from "@mui/system";

/* ----------- COMPONENT -------------- */

const InitiativeDetails = (props) => {
  let { groupId, communityName, initiativeId } = useParams();
  const initiatives = useSelector(selectInitiatives);
  const groups = useSelector(selectGroups);
  const currentInitiative = findById(initiatives, initiativeId);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState("Overview");

  /* Delete Initiative logic */
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(deleteInitiative(currentInitiative));
    handleClose();
    navigate(`/${communityName}/group/${groupId}`);
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
          <TabContext value={value}>
            {/* ---> Tabs <--- */}

            <TabNav
              setValue={setValue}
              handleDrawerToggle={props.handleDrawerToggle}
            />

            {/* ---> Initiative Overview <--- */}

            <TabPanel value="Overview" style={{ padding: 0 }}>
              {/* Banner image */}
              <img
                className="banner-image"
                src={currentInitiative.image}
                alt={currentInitiative.title.toString()}
              />

              {/* Back navigation */}
              <Box
                style={{ paddingLeft: 30, paddingTop: 12, paddingBottom: 12 }}
              >
                <Link
                  to={`/${communityName}/group/${groupId}`}
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <Button variant="text" startIcon={<ArrowBackIcon />}>
                    Back to overview
                  </Button>
                </Link>
              </Box>

              {/* ---- Initiative title and actions* ---- */}
              <Box style={{ paddingLeft: 30, paddingRight: 30, marginBottom: "10px" }}>
                <Typography variant="h4" >
                  {currentInitiative.title}
                </Typography>
              </Box>

              {/* Delete Initiative */}
              <Box style={{ paddingLeft: 30, paddingRight: 30, marginBottom: "30px" }}>
              <Button
                  variant="outlined"
                  startIcon={<DeleteForeverIcon />}
                  onClick={handleClickOpen}
                >
                  Delete Initiative
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Delete Initiative?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      This will permanently delete this initiative from the
                      database. Are you sure you want to delete the initiative?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus>
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
              

              {/* Initiative Content */}
              <Box style={{ paddingLeft: 30, paddingRight: 30 }}>
                <Typography style={{ marginBottom: "30px" }}>
                  {currentInitiative.text}
                </Typography>
              </Box>
            </TabPanel>

            {/* ---> Chat <--- */}
            <TabPanel value="Chat" style={{ padding: 0 }}>
              <Chat currentInitiative={currentInitiative.title} />
            </TabPanel>
          </TabContext>
        </Paper>
      </ThemeProvider>
      <Box>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default InitiativeDetails;
