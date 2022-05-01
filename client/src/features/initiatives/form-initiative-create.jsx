//React Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

//MUI Imports
import {
  TextField,
  Button,
  Box,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

//App Imports
import {
  createInitiative,
  updateInitiative,
} from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { selectCurrentUser } from "../../reducers/usersSlice";
import { selectCommunities } from "../../reducers/communitiesSlice";
import { findById } from "../../utils/find-by-id";

/* ----------- COMPONENT -------------- */

function FormCreateInitiative(props) {
  let { groupId, communityName } = useParams();
  const groups = useSelector(selectGroups);
  const currentGroup = findById(groups, groupId);
  const currentUser = useSelector(selectCurrentUser);
  const communities = useSelector(selectCommunities);
  const currentCommunity = communities.find(
    (community) => community.name.toLowerCase() === communityName.toLowerCase()
  );
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    _id: props.content._id,
    communityID: currentCommunity._id,
    groupID: currentGroup._id,
    title: props.content.title,
    image: props.content.image,
    description: props.content.description,
    ownerID: currentUser._id,
    website: props.content.webiste,
    instagram: props.content.instagram,
    twitter: props.content.twitter,
    text: props.content.text,
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
      dispatch(createInitiative(formValues));
    } else if (props.type === "update") {
      dispatch(updateInitiative(formValues));
    }
    props.setOpen(false);
  };

  return (
    <Box>
      <DialogTitle>New Initiative</DialogTitle>
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
            name="image"
            label="Image"
            type="string"
            value={formValues.image}
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
            sx={{
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

          <TextField
            id="text-input"
            name="text"
            label="Content"
            type="string"
            value={formValues.text}
            onChange={handleInputChange}
            multiline
            rows={8}
            sx={{
              margin: 1,
              gridColumn: "span 3",
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
    </Box>
  );
}

export default FormCreateInitiative;
