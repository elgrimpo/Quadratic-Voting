import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Link,
} from "@mui/material";

const GroupChannelList = (props) => {

  

  if (props.error) {
    return null;
  }

  if (props.loading) {
    return (
      <Paper id="groupsection-backgroud" elevation={3}>
     <Typography variant="body2" style={{padding: "8px 16px 8px 16px"}}>Loading...</Typography>
    </Paper>
    );
  }

  return (
    <List sx={{ paddingTop: 0, mb: "20px" }} dense={true}>
      <Paper id="groupsection-backgroud" elevation={3}>
        {props.children}
      </Paper>
    </List>
  );
};

export default GroupChannelList;
