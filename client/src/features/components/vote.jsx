//React Imports
import { useSelector, useDispatch } from "react-redux";

//MUI Imports
import { Box, Typography, IconButton } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTheme } from "@mui/material/styles";

//App Imports

import {
  selectCurrentInitiative,
  selectGroupInitiatives,
  changeUserVote,
} from "../../reducers/initiativesSlice";
import {
  selectCurrentGroup,
  updateVoteCredits,
} from "../../reducers/groupsSlice";

/* ----------- COMPONENT -------------- */

const VoteControl = (props) => {
  const theme = useTheme();

  const groupInitiatives = useSelector(selectGroupInitiatives);
  const currentGroup = useSelector(selectCurrentGroup);
  const dispatch = useDispatch();

  const handleVote = (number) => {
    const votesSquared = groupInitiatives.map((initiative) => {
      if (initiative._id === props.initiative._id) {
        return Math.pow(initiative.userVotes + number, 2); // update selected initiative and power^2
      } else {
        return Math.pow(initiative.userVotes, 2); // power^2 all other votes for initiatives within the same group
      }
    });
    const usedVotes = votesSquared.reduce((partialSum, a) => partialSum + a, 0);

    if (currentGroup.totalVotes - usedVotes >= 0) {
      dispatch(changeUserVote({ id: props.initiative._id, number: number }));
      dispatch(
        updateVoteCredits({ id: currentGroup._id, usedVotes: usedVotes })
      );
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
        {props.initiative.userVotes}
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
