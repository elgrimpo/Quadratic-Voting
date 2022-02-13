//React Imports
import { useSelector, useDispatch } from 'react-redux';

//MUI Imports
import { Typography, Stack, Link, Divider, Avatar } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

//App Imports
import { selectCurrentInitiative } from '../../store/initiatives/initiativesSlice'
import { selectCurrentGroup } from '../../store/groups/groupsSlice'
import {selectUsers} from '../../store/users/usersSlice'

/* ----------- COMPONENT -------------- */

const Sidebar = (props) => {
  const theme = useTheme();

  const currentInitiative = useSelector(selectCurrentInitiative);
  const currentGroup = useSelector(selectCurrentGroup);
  const users = useSelector(selectUsers);

  const sidebarContent = currentInitiative ? currentInitiative :
    currentGroup;

  const owner = users.find(user => user.id === sidebarContent.userID)



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
        alt={owner}
        src={owner.image}
        sx={{ width: 48, height: 48 }}
      />
    </Stack>
  );
};

export default Sidebar;
