//React Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

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
  selectGroups,
  createGroup,
  updateGroup,
} from "../../reducers/groupsSlice";
import { selectCurrentUser, updateUser } from "../../reducers/usersSlice";
import {
  createCommunity,
  selectCurrentCommunity,
  updateCommunity,
} from "../../reducers/communitiesSlice";
import { lightTheme } from "../../styles/themeProvider";
import { fx } from "../../utils";
import { useNavigate } from "react-router-dom";

/* ----------- COMPONENT -------------- */

export default NiceModal.create((props) => {
  let navigate = useNavigate();

  const groupId = props.groupId;
  const groups = useSelector(selectGroups);
  const currentGroup = fx.data.findById(groups, groupId);
  const currentUser = useSelector(selectCurrentUser);
  const currentCommunity = useSelector(selectCurrentCommunity);
  const dispatch = useDispatch();
  const modal = useModal();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [formValues, setFormValues] = useState({
    _id: props.content._id,
    name: props.content.name,
    logo_url: props.content.logo_url,
    banner_url: props.content.banner_url,
    headline: props.content.headline,
    description: props.content.description,
    members: [
      {
        user_id: currentUser._id,
        role: "owner",
      },
    ],
  });

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
      dispatch(createCommunity(formValues)).then((community) => {
        const newCommunity = community.payload;
        const response = fx.subscriptions.updateSubscription(
          currentUser,
          newCommunity
        );

        dispatch(updateUser(response.newUser));
        dispatch(
          createGroup({
            communityId: newCommunity._id,
            title: "General",
            members: [
              {
                user_id: currentUser._id,
                role: "owner",
              },
            ],
          })
        );
        navigate(`/${newCommunity.name}/overview`);
        fx.data.updateStore(response.newSubscriptions);
      });
      enqueueSnackbar("Community successfully created", {
        variant: "success",
      });
    } else if (props.type === "update") {
      dispatch(updateCommunity(formValues)).then((community) => {
        const newCommunity = community.payload;
        navigate(`/${newCommunity.name}/overview`);
      });
      enqueueSnackbar("Community successfully updated", {
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
            ? "Create Community"
            : `Update "${props.content.name}"`}
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
              id="name-input"
              name="name"
              label="Name"
              type="string"
              value={formValues.name}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="logo_url-input"
              name="logo_url"
              label="Logo"
              type="string"
              value={formValues.logo_url}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="banner_url-input"
              name="banner_url"
              label="Banner Image"
              type="string"
              value={formValues.banner_url}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 1",
                margin: 1,
              }}
            />

            <TextField
              id="headline-input"
              name="headline"
              label="Headline"
              type="string"
              value={formValues.headline}
              onChange={handleInputChange}
              sx={{
                gridColumn: "span 3",
                margin: 1,
              }}
            />

            <TextField
              id="description-input"
              name="description"
              label="Description"
              type="string"
              value={formValues.description}
              onChange={handleInputChange}
              multiline
              rows={6}
              sx={{
                gridColumn: "span 3",
                margin: 1,
              }}
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
