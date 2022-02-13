//React Imports
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

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
import { removeCurrentInitiativeSelection } from '../../store/initiatives/initiativesSlice'
import {selectGroups, selectCurrentGroup, setCurrentGroup} from '../../store/groups/groupsSlice'

/* ----------- COMPONENT -------------- */

function NavSection(props) {
  
  const groups = useSelector(selectGroups)
  const currentGroup = useSelector(selectCurrentGroup)
  const dispatch = useDispatch();


  function handleListItemClick(id) {
    if (props.title === 'Groups') {
      dispatch(setCurrentGroup(id));
      dispatch(removeCurrentInitiativeSelection())}
  }

  return (
    <Box>
      {/* ---> Header and Add Button <--- */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h7"
          sx={{
            bgcolor: "transparent",
            color: "primary.main",
            verticalAlign: "middle",
            paddingLeft: 1,
          }}
        >
          {props.title}
        </Typography>
        <IconButton sx={{ color: "primary.main" }}>
          <AddIcon />
        </IconButton>
      </Box>

      {/* ---> Navigational Sections <--- */}

      <List sx={{ paddingTop: 0, mb: "20px" }} dense={true}>
        <Paper
          elevation={3}
          sx={{
            mt: 1,
            boxShadow: "inset -1px 1px 2px 2px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            padding: 1,
          }}
        >
          {props.items.map((item) => (
            <Link key={item.id} to="/" style={{ textDecoration: "none" }}>
              <ListItemButton
                
                key={item.id}
                selected={item.current === true}
                onClick={() => {
                  handleListItemClick(item.id);
                }}
              >
                <ListItemText
                  key={item.id}
                  primary={item.title}
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
