//React Imports
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//MUI Imports
import {
  Box,
  Typography,
  Stack,
  Link,
  Divider,
  Avatar,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

//App Imports
import { VoteControl } from "../index";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { selectUsers, selectCurrentUser } from "../../reducers/usersSlice";
import { fx } from "../../utils";

/* ----------- COMPONENT -------------- */

const GroupSidebar = (props) => {
  const theme = useTheme();
  const { groupId } = useParams();
  const groups = useSelector(selectGroups);
  const users = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser);
  const currentGroup = fx.data.findById(groups, groupId);
  //Remaining Group Votes
  //TODO: Take out functions for Group specific things?
  const remainingGroupVotes = fx.voting.calcGroupRemainingVotes(currentUser, currentGroup)


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

      <Typography variant="h6">{currentGroup?.title}</Typography>
      <Typography variant="body2">{currentGroup?.description}</Typography>
      <Divider sx={{ mt: "16px", mb: "16px" }} />

      {/* --->Links <--- */}

      <Link href={currentGroup?.website} underline="hover">
        <LanguageIcon className="link-icon" />
        {"Website"}
      </Link>
      <Link href={currentGroup?.twitter} underline="hover">
        <TwitterIcon className="link-icon" />
        {"Twitter"}
      </Link>
      <Link href={currentGroup?.instagram} underline="hover">
        <InstagramIcon className="link-icon" />
        {"Instagram"}
      </Link>
      <Divider />

      {/* ---> Owner <--- */}

      <Typography variant="h7">Group admin</Typography>
      <Box sx={{display: "flex"}}>
      {currentGroup?.members.map((member, index) => {
        if (member.role === "admin" || member.role === "owner") {
          const owner = users.find((user) => user._id === member.user_id);
          return (
            <Avatar
              style={{ border: `2px solid ${theme.palette.primary.light}`, marginRight:"10px" }}
              key={index}
              alt={owner?._id}
              src={owner?.image_url}
              sx={{ width: 48, height: 48 }}
            />
          );
        } else {
          return null
        }
      })}
      </Box>
      <Divider />

      {/* ---> Votes <--- */}

      <Box>
        <Typography variant="h7">Remaining vote credits</Typography>
        <Typography color="primary" variant="h5">
          {remainingGroupVotes}
        </Typography>
      </Box>

    </Stack>
  );
};

export default GroupSidebar;
