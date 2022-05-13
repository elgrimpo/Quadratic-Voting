//React Imports
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//MUI Imports
import { Box, Typography, Stack, Link, Divider, Avatar } from "@mui/material";
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

const InitiativeSidebar = (props) => {
  const theme = useTheme();
  const { initiativeId, groupId } = useParams();
  const initiatives = useSelector(selectInitiatives);
  const groups = useSelector(selectGroups);
  const users = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser);
  const currentInitiative = fx.data.findById(initiatives, initiativeId);
  const currentGroup = fx.data.findById(groups, groupId);

  //Remaining Group Votes
  // TODO: Put into separate file
  const groupIndex = currentGroup?.remainingVotes.findIndex(
    (vote) => vote.userId === currentUser._id
  );
  const remainingGroupVotes =
    groupIndex === -1
      ? currentGroup?.totalVotes
      : currentGroup?.remainingVotes[groupIndex].votes;

  // Initiative Received User Votes
    // TODO: Put into separate file
  const InitiativeIndex = currentInitiative?.receivedVotes.findIndex(
    (vote) => vote.userId === currentUser._id
  );
  const InitiativeReceivedVotes =
    InitiativeIndex === -1
      ? 0
      : currentInitiative?.receivedVotes[InitiativeIndex].votes;

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

      <Typography variant="h6">{currentInitiative?.title}</Typography>
      <Typography variant="body2">{currentInitiative?.description}</Typography>
      <Divider sx={{ mt: "16px", mb: "16px" }} />

      {/* --->Links <--- */}

      <Link href={currentInitiative?.website} underline="hover">
        <LanguageIcon className="link-icon" />
        {"Website"}
      </Link>
      <Link href={currentInitiative?.twitter} underline="hover">
        <TwitterIcon className="link-icon" />
        {"Twitter"}
      </Link>
      <Link href={currentInitiative?.instagram} underline="hover">
        <InstagramIcon className="link-icon" />
        {"Instagram"}
      </Link>
      <Divider />

      {/* ---> Owner <--- */}

      <Typography variant="h7">Group admin</Typography>
      <Box sx={{ display: "flex" }}>
        {currentInitiative?.permissions.map((permission, index) => {
          if (permission.role === "admin") {
            const owner = users.find((user) => user._id === permission.userId);
            return (
              <Avatar
                style={{
                  border: `2px solid ${theme.palette.primary.light}`,
                  marginRight: "10px",
                }}
                key={index}
                alt={owner?._id}
                src={owner?.image_url}
                sx={{ width: 48, height: 48 }}
              />
            );
          } else {
            return null;
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

      <Box>
        <Typography variant="h7" sx={{ display: "block" }}>
          Received votes:
        </Typography>
        <Typography color="primary" variant="h5">
          {InitiativeReceivedVotes}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h7" sx={{ display: "block" }}>
          Cast vote
        </Typography>
        <VoteControl initiative={currentInitiative} />
      </Box>
    </Stack>
  );
};

export default InitiativeSidebar;
