//React Imports
import { Link, useParams } from "react-router-dom";
import React from "react";


//MUI Imports
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

//App Imports


/* ----------- COMPONENT -------------- */

function GroupsSection(props) {

  let { communityName, groupId } = useParams() 

  return (
    <Box>
      {/* ---> Header and Add Button <--- */}

      <Box id="groupsection-header">
        <Typography
          id="groupsection-title"
          variant="h7"
          sx={{ color: "primary.main" }}
        >
          {props.title}
        </Typography>
        <IconButton sx={{ color: "primary.main" }}>
          <AddIcon />
        </IconButton>
      </Box>

      {/* ---> Navigational Sections <--- */}

      <List sx={{ paddingTop: 0, mb: "20px" }} dense={true}>
        <Paper id='groupsection-backgroud' elevation={3}>
          {props.items.map((item) => (
            <Link
              key={item._id}
              to={`/${communityName}/group/${item._id}`} //to be updated
              style={{ textDecoration: "none" }}
            >
              <ListItemButton
                selected={item._id === groupId}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          ))}
        </Paper>
      </List>
    </Box>
  );
}

export default GroupsSection;
