//React Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
import { createInitiative } from "../../store/initiatives/initiativesSlice";
import { selectCurrentGroup } from "../../store/groups/groupsSlice";
import { selectCurrentUser } from "../../store/users/usersSlice";
import { selectCurrentCommunity } from "../../store/communities/communitiesSlice";

/* ----------- COMPONENT -------------- */

function FormCreateInitiative(props) {
  const currentGroup = useSelector(selectCurrentGroup);
  const currentUser = useSelector(selectCurrentUser);
  const currentCommunity = useSelector(selectCurrentCommunity);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    communityID: "",
    groupID: "",
    title: "",
    image: "",
    description: "",
    userID: currentUser.id,
    website: "",
    instagram: "",
    twitter: "",
    totalVotes: 0,
    userVotes: 0,
    text: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      communityID: currentCommunity.id,
      groupID: currentGroup.id,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    dispatch(createInitiative(formValues));
    props.setOpen(false);
  };

  return (
    <Box >
      <DialogTitle>New Initiative</DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: '1fr, 1fr, 1fr',
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
              gridColumn: 'span 1',
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
              gridColumn: 'span 1',
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
              gridColumn: 'span 1',
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
              gridColumn: 'span 1',
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
              gridColumn: 'span 1',
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
              gridColumn: 'span 3',
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
              gridColumn: 'span 3'
            }}
          />
          <DialogActions sx={{
              gridColumn: 'span 3',
            }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Box>
  );
}

export default FormCreateInitiative;
