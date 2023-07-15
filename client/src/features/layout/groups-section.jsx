//React Imports
import { Link, useParams } from "react-router-dom";
import React from "react";
import NiceModal from "@ebay/nice-modal-react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
import { FormCreateGroup } from "../index.js";
import { fetchInitiatives } from "../../reducers/initiativesSlice";

/* ----------- COMPONENT -------------- */

function GroupsSection(props) {
  const dispatch = useDispatch();
  let { communityName, groupId } = useParams();

  const showCreateGroup = () => {
    NiceModal.show(FormCreateGroup, {
      type: "create",
      content: "",
    });
  };

  useEffect(() => {
    dispatch(fetchInitiatives({groupId: groupId}));
  }, [groupId]);

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
        <IconButton sx={{ color: "primary.main" }} onClick={showCreateGroup}>
          <AddIcon />
        </IconButton>
      </Box>

      {/* ---> Navigational Sections <--- */}

      <List sx={{ paddingTop: 0, mb: "20px" }} dense={true}>
        <Paper id="groupsection-backgroud" elevation={3}>
          {props.items.map((item) => (
            <Link
              key={item._id}
              to={`/${communityName}/group/${item._id}`} //TODO: to be updated
              style={{ textDecoration: "none" }}
            >
              <ListItemButton selected={item._id === groupId} key={item._id}>
                <ListItemText
                  id="main-nav-items"
                  primary={item.title}
                  key={item._id}
                />
              </ListItemButton>
            </Link>
          ))}
        </Paper>
      </List>
    </Box>
  );
}

export default GroupsSection;
