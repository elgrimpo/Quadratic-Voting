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
  const { currentGroup, users, currentInitiative } = useContext(DataContext);
  const theme = useTheme();

  return (
    <div>
        <Typography>
          Chat
        </Typography>
        <Typography>
          {currentGroup}
        </Typography>
        <Typography>
          {currentInitiative}
        </Typography>
    </div>
  )
}
