//MUI Imports
import {
  Button,
    Dialog, DialogActions, DialogContent, TextField,
  } from "@mui/material";

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useState } from "react";

// App imports
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { lightTheme } from "../../styles/themeProvider";


export default NiceModal.create((props) => {
  // Use a hook to manage the modal state
  const modal = useModal();
  const theme = useTheme();
  
  const [formValues, setFormValues] = useState({})
  
  const handleSubmit = () => {

  }

  const handleInputChange = () => {

  }

  return (
    <ThemeProvider theme={lightTheme}>
    <Dialog
      onClose={() => modal.hide()}
      open={modal.visible}
    >
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
    </Dialog>
    </ThemeProvider>
  );
});