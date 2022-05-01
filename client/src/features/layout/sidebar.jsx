//React Imports
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//MUI Imports
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link,
  Divider,
  Avatar,
  Chip,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTheme } from "@mui/material/styles";

//App Imports
import { VoteControl } from "../index";
import { selectGroupInitiatives, selectInitiatives } from "../../reducers/initiativesSlice";
import { selectGroups } from "../../reducers/groupsSlice";
import { selectUsers, selectCurrentUser } from "../../reducers/usersSlice";
import {findById} from "../../utils/find-by-id"

/* ----------- COMPONENT -------------- */

const Sidebar = (props) => {
  const theme = useTheme();
  const {initiativeId, groupId} = useParams();
  const initiatives = useSelector(selectInitiatives)
  const groups = useSelector(selectGroups)
  const users = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser)
  const currentInitiative = findById(initiatives, initiativeId)
  const currentGroup = findById(groups, groupId)
 

  const sidebarContent = currentInitiative ? currentInitiative : currentGroup;

  const owner = users.find((user) => user._id === sidebarContent.ownerID);

  //Remaining Group Votes
  const groupIndex = currentGroup?.remainingVotes.findIndex(vote => vote.userId === currentUser._id)
  const remainingGroupVotes = groupIndex === -1 ? currentGroup?.totalVotes : currentGroup?.remainingVotes[groupIndex].votes
  
  // Initiative Received User Votes
  const InitiativeIndex = currentInitiative?.receivedVotes.findIndex(vote => vote.userId === currentUser._id)
  const InitiativeReceivedVotes = InitiativeIndex === -1 ? 0 : currentInitiative?.receivedVotes[InitiativeIndex].votes


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

      <Typography variant="h5">{sidebarContent?.title}</Typography>
      <Typography>{sidebarContent?.description}</Typography>
      <Divider sx={{ mt: "16px", mb: "16px" }} />

      {/* --->Links <--- */}

      <Link href={sidebarContent?.website} underline="hover">
        <LanguageIcon className="link-icon" />
        {"Website"}
      </Link>
      <Link href={sidebarContent?.twitter} underline="hover">
        <TwitterIcon className="link-icon" />
        {"Twitter"}
      </Link>
      <Link href={sidebarContent?.instagram} underline="hover">
        <InstagramIcon className="link-icon" />
        {"Instagram"}
      </Link>
      <Divider />

      {/* ---> Owner <--- */}

      <Typography variant="h7">Group admin</Typography>
      <Avatar
        style={{ border: `2px solid ${theme.palette.primary.light}` }}
        alt={owner?._id}
        src={owner?.image}
        sx={{ width: 48, height: 48 }}
      />
      <Divider />

      {/* ---> Votes <--- */}

      <Box>
        <Typography variant="h7">Remaining vote credits</Typography>
        <Typography color="primary" variant="h5">
          {remainingGroupVotes}
        </Typography>
      </Box>

      {sidebarContent === currentInitiative ? (
        <Box>
          <Typography variant="h7" sx={{ display: "block" }}>
            Received votes:
          </Typography>
          <Typography color="primary" variant="h5">
            {InitiativeReceivedVotes}
          </Typography>
        </Box>
      ) : (
        ""
      )}
      {sidebarContent === currentInitiative ? (
        <Box>
          <Typography variant="h7" sx={{ display: "block" }}>
            Cast vote
          </Typography>
          <VoteControl initiative={currentInitiative} />
        </Box>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default Sidebar;
