//React Imports
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { subject } from "@casl/ability";

//MUI Imports
import { Box, Typography, IconButton } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

//App Imports
import { selectCurrentUser } from "../../reducers/usersSlice";
import {
  selectInitiatives,
  updateInitiative,
} from "../../reducers/initiativesSlice";
import { selectGroups, updateGroup } from "../../reducers/groupsSlice";
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";
import Can from "../components/Can";
import { fx } from "../../utils";

/* ----------- COMPONENT -------------- */

const VoteControl = (props) => {
  let { groupId } = useParams();
  const groups = useSelector(selectGroups);
  const initiatives = useSelector(selectInitiatives);
  const currentUser = useSelector(selectCurrentUser);
  const groupInitiatives = initiatives.filter(
    (initiative) => initiative.groupId === groupId
  );
  const currentCommunity = useSelector(selectCurrentCommunity);
  const currentGroup = fx.data.findById(groups, groupId);
  const InitiativeReceivedVotes = fx.voting.calcUserInitiativeVotes(
    currentUser,
    props.initiative
  );

  // Manage Voting
  const handleVote = (number) => {
    const usedVotes = fx.voting.quadraticVote(
      currentUser,
      props.initiative,
      groupInitiatives,
      number
    );
    if (currentGroup.totalVotes - usedVotes >= 0) {
      fx.voting.updateInitiativeVote(currentUser, props.initiative, number);
      fx.voting.updateGroupRemainingVote(currentUser, currentGroup, usedVotes)
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Can
        I="vote"
        a={subject(
          "Community",
          Object.create(currentCommunity || { waiting: "waiting" })
        )}
      >
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => handleVote(-1)}
        >
          <RemoveCircleIcon fontSize="large" color="primary" />
        </IconButton>
        <Typography variant="h5" sx={{ display: "block", m: 1 }}>
          {InitiativeReceivedVotes}
        </Typography>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => handleVote(1)}
        >
          <AddCircleIcon fontSize="large" color="primary" />
        </IconButton>
      </Can>
    </Box>
  );
};

export default VoteControl;
