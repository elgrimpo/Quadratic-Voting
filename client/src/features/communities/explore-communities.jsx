// React/Redux Imports
import React, { useEffect, useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

// MUI Imports
import {
  Fab,
  Box,
  Typography,
  Dialog,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';

// App Imports
import {
  CommunityCard,
} from "../index.js";
import { lightTheme } from "../../styles/themeProvider";
import * as api from "../../api";

/* ----------- COMPONENT -------------- */

export default NiceModal.create((props) => {
  const modal = useModal();

  // API's

  // Variable
  const [communities, setCommunities] = useState([{}]);

  // Functions
  useEffect(() => {
    async function fetchData() {
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
    }}
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Dialog
        style={{
          backgroundColor: "#F8F8F8",
        }}
        onClose={() => modal.remove()}
        open={modal.visible}
        fullScreen={true}
        maxWidth="lg"
      >
        <Fab
          id="menu-button"
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => modal.remove()}
        >
          <CloseIcon />
        </Fab>
        {/* ---> Title <--- */}
        <Box
          sx={{ maxWidth: { lg: "1000px" } }}
          style={{
            paddingLeft: 30,
            paddingRight: 30,
            margin: "40px auto 20px auto",
            textAlign: "center",

          }}
        >
          <Typography
            variant="h4"
            style={{ color: "black" }}
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
              onClose={() => modal.remove()}
            >

            </CommunityCard>
          ))}
        </Box>
      </Dialog>
    </ThemeProvider>
  );
});
