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
  changeReceivedVote,
  selectInitiatives,
  updateInitiative
} from "../../reducers/initiativesSlice";
import {
  selectCurrentGroup,
  updateVoteCredits,
  selectGroups,
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
  const initiativeIndex = props.initiative.receivedVotes.findIndex(
    (vote) => vote.userId === currentUser._id
  );
  const InitiativeReceivedVotes =
    initiativeIndex === -1
      ? 0
      : props.initiative.receivedVotes[initiativeIndex].votes;

  // Manage Voting
  const handleVote = (number) => {
    const userVotes = groupInitiatives.map((initiative) => {
      let index = initiative.receivedVotes.findIndex(
        (vote) => vote.userId === currentUser._id
      );
      if (index != -1) {
        if (initiative._id === props.initiative._id) {
          const newCount = initiative.receivedVotes[index].votes + number;
          console.log(`current initiative new count: ${newCount}`);
          return newCount; // update selected initiative a
        } else {
          console.log(
            `other initiative count: ${initiative.receivedVotes[index]?.votes}`
          );
          return initiative.receivedVotes[index]?.votes; // all other votes for initiatives within the same group
        }
      } else {
        return 0;
      }
    });
    const usedVotes = userVotes.reduce(
      (partialSum, a) => partialSum + Math.pow(a, 2),
      0
    );
    console.log(`used Votes: ${usedVotes}`);

    if (currentGroup.totalVotes - usedVotes >= 0) {
      console.log(props.initiative.receivedVotes)
      const receivedVotes = props.initiative.receivedVotes.map(vote => {return {userId: vote.userId, votes: vote.votes}})
      let newInitiative = {_id:props.initiative._id, receivedVotes: receivedVotes}
      
      if (initiativeIndex === -1) {
        newInitiative.receivedVotes.push({
          userId: currentUser._id,
          votes: number,
        });
        console.log(newInitiative);
      } else {
        newInitiative.receivedVotes[initiativeIndex].votes += number;
        console.log(newInitiative);
      } 

      dispatch(updateInitiative(newInitiative))

      /* dispatch(changeReceivedVote({ InitiativeId: props.initiative._id, userId: currentUser._id, number: number }));
      dispatch(
         updateVoteCredits({ id: currentGroup._id, usedVotes: usedVotes })
      );*/
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
