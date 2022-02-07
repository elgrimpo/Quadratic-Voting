//React Imports
import React, { useState, useContext } from "react";

//MUI Imports
import { AppBar, Tab, IconButton, TextField, Button, Box, DialogContent, DialogTitle, FormControl } from "@mui/material";
import TabList from "@mui/lab/TabList";
import MenuIcon from "@mui/icons-material/Menu";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

function FormCreateInitiative(props) {
  const {
    currentCommunity,
    currentUser,
    currentGroup,
    setInitiatives,
    initiatives,
    initiativeList2,
    setInitiativeList2,
  } = useContext(DataContext);

  const [formValues, setFormValues] = useState({
    communityID: "",
    groupID: "",
    title: "",
    image: "",
    description: "",
    owner: currentUser,
    website: "",
    instagram: "",
    twitter: "",
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
    setInitiatives([...initiatives, formValues]);
    setInitiativeList2([...initiativeList2, formValues]);
    console.log("initiatives: " + initiatives);
    console.log(initiativeList2);
    props.setOpen(false)
  };

  return (
    <Box
    sx={{display:'block',
      width:'500px'}}>
    <DialogTitle>New Initiative</DialogTitle>
    <DialogContent>


      <form onSubmit={handleSubmit}
      style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TextField
          id="title-input"
          name="title"
          label="Title"
          type="stromg"
          value={formValues.title}
          onChange={handleInputChange}
          sx={{
            width: '400px',
            margin: 1,
          }}
        />

        <TextField
          id="image-input"
          name="image"
          label="Image"
          type="stromg"
          value={formValues.image}
          onChange={handleInputChange}
          sx={{
            width: '400px',
            margin: 1,
          }}
        />

        <TextField
          id="website-input"
          name="website"
          label="Website"
          type="stromg"
          value={formValues.website}
          onChange={handleInputChange}
          sx={{
            width: '400px',
            margin: 1,
          }}
        />

        <TextField
          id="instagram-input"
          name="instagram"
          label="Instagram"
          type="stromg"
          value={formValues.instagram}
          onChange={handleInputChange}
          sx={{
            width: '400px',
            margin: 1,
          }}
        />

        <TextField
          id="twitter-input"
          name="twitter"
          label="Twitter"
          type="stromg"
          value={formValues.twitter}
          onChange={handleInputChange}
          sx={{
            width: '400px',
            margin: 1,
          }}
        />

        <TextField
          id="description-input"
          name="description"
          label="Blurp"
          type="stromg"
          value={formValues.description}
          onChange={handleInputChange}
          sx={{
            width: '400px',
            margin: 1,
          }}
        />

        <Button variant="contained" type="submit" sx={{mt:2}}>
          Submit
        </Button>
      </form>
    </DialogContent>
    </Box>
  );
}

export default FormCreateInitiative;
