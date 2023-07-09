//React Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//MUI Imports
import {
  TextField,
  Button,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
  useMediaQuery,
} from "@mui/material";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ThemeProvider, useTheme } from "@mui/material/styles";

//App Imports
import {
  createInitiative,
  updateInitiative,
} from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { selectCurrentUser } from "../../reducers/usersSlice";
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";
import { fx } from "../../utils";
import { lightTheme } from "../../styles/themeProvider";

/* ----------- COMPONENT -------------- */

export default NiceModal.create((props) => {
  // API's
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const modal = useModal();
  const theme = useTheme();

  // Variables
  const groupId = props.groupId;
  const groups = useSelector(selectGroups);
  const currentGroup = fx.data.findById(groups, groupId);
  const currentUser = useSelector(selectCurrentUser);
  const currentCommunity = useSelector(selectCurrentCommunity);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [formValues, setFormValues] = useState({
    _id: props.content._id,
    communityId: currentCommunity._id,
    groupId: currentGroup._id,
    title: props.content.title,
    image_url: props.content.image_url,
    description: props.content.description,
    ownerId: currentUser._id, //TODO: Delete
    website: props.content.webiste,
    instagram: props.content.instagram,
    twitter: props.content.twitter,
    text: props.content.text,
    receivedVotes: [],
    permissions: [
      {
        userId: currentUser._id,
        role: "admin",
      },
    ],
  });

  // Functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.type === "create") {
      dispatch(createInitiative(formValues));
      enqueueSnackbar("Initiative successfully created", {
        variant: "success",
      });
    } else if (props.type === "update") {
      dispatch(updateInitiative(formValues));
      enqueueSnackbar("Initiative successfully updated", {
        variant: "success",
      });
    }
    modal.remove();
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Dialog
        onClose={() => modal.remove()}
        open={modal.visible}
        fullScreen={fullScreen}
        maxWidth="lg"
      >
        <DialogTitle>
          {props.type === "create"
            ? "New Initiative"
            : `Update "${props.content.title}"`}
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr, 1fr, 1fr",
              alignItems: "center",
            }}
          >
            <TextField
              id="title-input"
              name="title"
              label="Title"
              type="string"
              value={formValues.title}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="image-input"
              name="image_url"
              label="Image"
              type="string"
              value={formValues.image_url}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="website-input"
              name="website"
              label="Website"
              type="string"
              value={formValues.website}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="instagram-input"
              name="instagram"
              label="Instagram"
              type="string"
              value={formValues.instagram}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="twitter-input"
              name="twitter"
              label="Twitter"
              type="string"
              value={formValues.twitter}
              onChange={handleInputChange}
              style={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="description-input"
              name="description"
              label="Short summary"
              type="string"
              value={formValues.description}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={{
                gridColumn: "span 3",
                margin: 1,
              }}
            />

            <ReactQuill
              value={formValues.text}
              onChange={(text) => setFormValues({ ...formValues, text })}
              style={{height: '400px', gridColumn: "span 3", margin: '8px 8px 50px 8px'}}
            />

            <DialogActions
              sx={{
                gridColumn: "span 3",
              }}
            >
              <Button variant="contained" type="submit">
                {props.type === "create" ? "Submit" : "Update"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
});
