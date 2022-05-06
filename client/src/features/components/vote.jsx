//React Imports
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

//MUI Imports
import { Box, Typography, IconButton } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTheme } from "@mui/material/styles";

//App Imports
import { selectCurrentUser } from "../../reducers/usersSlice";
import {
  selectCurrentInitiative,
  selectGroupInitiatives,
  selectInitiatives,
  updateInitiative,
} from "../../reducers/initiativesSlice";
import {
  selectCurrentGroup,
  selectGroups,
  updateGroup
} from "../../reducers/groupsSlice";
import { findById } from "../../utils/find-by-id";

/* ----------- COMPONENT -------------- */

const VoteControl = (props) => {
  let { groupId } = useParams();
  const groups = useSelector(selectGroups);
  const initiatives = useSelector(selectInitiatives);
  const currentUser = useSelector(selectCurrentUser);
  const groupInitiatives = initiatives.filter(
    (initiative) => initiative.groupID === groupId
  );
  const currentGroup = findById(groups, groupId);
  const dispatch = useDispatch();

  // Initiative Received User Votes
  const initiativeIndex = props.initiative?.receivedVotes.findIndex(
    (vote) => vote.userId === currentUser._id
  );
  const InitiativeReceivedVotes =
    initiativeIndex === -1
      ? 0
      : props.initiative?.receivedVotes[initiativeIndex].votes;

  // Manage Voting
  const handleVote = (number) => {
    // --- calculate sum of votes^2 of current User ---
    const userVotes = groupInitiatives.map((initiative) => {
      let index = initiative?.receivedVotes.findIndex(
        (vote) => vote.userId === currentUser._id
      ); // identifies index of initiative vote record for current user
      if (index !== -1) {
        if (initiative._id === props.initiative._id) {
          const newCount = initiative.receivedVotes[index].votes + number;
          return newCount; // update selected initiative with +1 or -1
        } else {
          return initiative.receivedVotes[index]?.votes; // return other votes for initiatives within the same group
        }
      } else {
        return 0;
      }
    });

    const usedVotes = userVotes.reduce(
      (partialSum, a) => partialSum + Math.pow(a, 2),
      0
    ); // Adds all group Initiatives votes^2 (from current user)

    // --- Update initiative voting record --- //
    if (currentGroup.totalVotes - usedVotes >= 0) {
      const receivedVotes = props.initiative.receivedVotes.map((vote) => {
        return { userId: vote.userId, votes: vote.votes };
      });
      let newInitiative = {
        _id: props.initiative._id,
        receivedVotes: receivedVotes,
      }; // payload object

      if (initiativeIndex === -1) {
        newInitiative.receivedVotes.push({
          userId: currentUser._id,
          votes: number,
        }); // creates new entry in payload for current user, if it doesn't exist yet
      } else {
        newInitiative.receivedVotes[initiativeIndex].votes += number; // updates existing entry in payload for current user, if already existing
      }
      dispatch(updateInitiative(newInitiative));

      // --- Update group voting record --- //
      const groupIndex = currentGroup.remainingVotes.findIndex(
        (vote) => vote.userId === currentUser._id
      );
      const remainingVotes = currentGroup.remainingVotes.map((vote) => {
        return { userId: vote.userId, votes: vote.votes };
      });

      let newGroup = {
        _id: currentGroup._id,
        remainingVotes: remainingVotes,
      }; // payload object

      if (groupIndex === -1) {
        newGroup.remainingVotes.push({
          userId: currentUser._id,
          votes: currentGroup.totalVotes - usedVotes,
        }); // creates new entry in payload for current user, if it doesn't exist yet

      } else {
        newGroup.remainingVotes[groupIndex].votes =
          currentGroup.totalVotes - usedVotes; // updates existing entry in payload for current user, if already existing
      }

      dispatch(updateGroup(newGroup));
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
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
    </Box>
  );
};

export default VoteControl;
