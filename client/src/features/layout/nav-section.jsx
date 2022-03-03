//React Imports
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
import { removeCurrentInitiativeSelection } from "../../reducers/initiativesSlice";
import {
  selectGroups,
  selectCurrentGroup,
  setCurrentGroup,
} from "../../reducers/groupsSlice";

/* ----------- COMPONENT -------------- */

function NavSection(props) {
  const groups = useSelector(selectGroups);
  const currentGroup = useSelector(selectCurrentGroup);
  const dispatch = useDispatch();

  function handleListItemClick(id) {
    if (props.title === "Groups") {
      dispatch(setCurrentGroup(id));
      dispatch(removeCurrentInitiativeSelection());
    }
  }

  return (
    <Box>
      {/* ---> Header and Add Button <--- */}

      <Box id="navsection-header">
        <Typography
          id="navsection-title"
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
        <Paper id='navsection-backgroud' elevation={3}>
          {props.items.map((item) => (
            <Link
              key={item._id}
              to={"/groups/" + item._id}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton
                selected={item.current === true}
                onClick={() => {
                  handleListItemClick(item._id);
                }}
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

export default NavSection;
