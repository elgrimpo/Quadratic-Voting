//React Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//MUI Imports
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Divider,
  Toolbar,
  Paper,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import { palette } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

function NavSection(props) {
  const { groups, currentGroup, setCurrentGroup, channels, setSidebarContent } =
    useContext(DataContext);

  function handleListItemClick(index) {
    if(props.currentItem === currentGroup) {
    setCurrentGroup(groups[index]);
    setSidebarContent(currentGroup)
  }}

  return (
    <Box >


{/* ---> Header and Add Button <--- */}

     <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography
          variant="h7"
          sx={{ bgcolor: "transparent", color: "primary.main", verticalAlign:'middle', paddingLeft:1}}
        >
          {props.title}
        </Typography>
        <IconButton sx={{color: 'primary.main'}}>
            <AddIcon/>
        </IconButton>
     </Box>

{/* ---> Navigational Sections <--- */}

        <List sx={{paddingTop:0, mb:'20px'}} dense={true}>
        <Paper elevation={3} sx={{mt:1, boxShadow:'inset -1px 1px 2px 2px rgba(0, 0, 0, 0.1)', borderRadius:2, padding:1 }}>
          {props.items.map((item) => (
            <Link key={item.id} to="/" style={{ textDecoration: "none" }}>
              <ListItemButton
                button
                key={item.id}
                selected={item.id === props.currentItem.id}
                onClick={() => {
                  handleListItemClick(props.items.indexOf(item));
                }}
              >
                <ListItemText
                  key={item.id}
                  primary={item.title}
                  sx={{ color: "text.primary" }}
                />
              </ListItemButton>
            </Link>
          ))}
        </Paper>
      </List>



    </Box>
  );
}

export default NavSection;



