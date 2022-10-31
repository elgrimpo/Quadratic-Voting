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
      <div>
        <p>loading...</p>
      </div>
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
