//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Typography, Stack, Link, Divider, Avatar } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const Sidebar = (props) => {
  const { sidebarContent } = useContext(DataContext);
  const theme = useTheme();

  return (
    <Stack
      id="sidebar"
      spacing={2}
      sx={{
        bgcolor: {
          xs: "background.paper",
          sm: "background.paper",
          md: "transparent",
        },
      }}
    >
      {/* ---> Title and Description <--- */}

      <Typography variant="h5">{sidebarContent.title}</Typography>
      <Typography>{sidebarContent.description}</Typography>
      <Divider />

      {/* --->Links <--- */}

      <Link href={sidebarContent.website} underline="hover">
        <LanguageIcon style={{ marginRight: 8, verticalAlign: "bottom" }} />
        {"Website"}
      </Link>
      <Link href={sidebarContent.twitter} underline="hover">
        <TwitterIcon style={{ marginRight: 8, verticalAlign: "bottom" }} />
        {"Twitter"}
      </Link>
      <Link href={sidebarContent.instagram} underline="hover">
        <InstagramIcon style={{ marginRight: 8, verticalAlign: "bottom" }} />
        {"Instagram"}
      </Link>
      <Divider />

      {/* ---> Owner <--- */}

      <Typography variant="h7">Group admin</Typography>
      <Avatar
        style={{ border: `2px solid ${theme.palette.primary.light}` }}
        alt={sidebarContent.owner}
        src={sidebarContent.owner.image}
        sx={{ width: 48, height: 48 }}
      />
    </Stack>
  );
};

export default Sidebar;
