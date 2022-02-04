//React Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//MUI Imports
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Divider,
  Toolbar,
} from "@mui/material";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

function MainNav(props) {
  const { groups, currentGroup, setCurrentGroup, channels } =
    useContext(DataContext);

  function handleListItemClick(index) {
    setCurrentGroup(groups[index]);
  }

  return (
    <div id="main-nav">
      <Toolbar variant="dense" />
      <Divider />

      <List>
        <ListSubheader component="div">Groups</ListSubheader>
        {groups.map((group) => (
          <Link key={group.id} to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItemButton
              button
              key={group.id}
              selected={group.id === currentGroup.id}
              onClick={() => {
                handleListItemClick(groups.indexOf(group));
              }}
            >
              <ListItemText key={group.id} primary={group.title} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader component="div">Channels</ListSubheader>
        {channels.map((channel) => (
          <ListItemButton button key={channel.id}>
            <ListItemText primary={channel.title} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}

export default MainNav;
