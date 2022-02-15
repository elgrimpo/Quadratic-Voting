//React Imports
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from 'react'

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

import { selectCurrentInitiative, selectGroupInitiatives, changeUserVote } from "../store/initiatives/initiativesSlice";
import { selectCurrentGroup, updateVoteCredits } from "../store/groups/groupsSlice";
import { selectUsers } from "../store/users/usersSlice";

/* ----------- COMPONENT -------------- */

const VoteControl = (props) => {
  const theme = useTheme();

  
  const groupInitiatives = useSelector(selectGroupInitiatives)
  const currentGroup = useSelector(selectCurrentGroup);
  const dispatch = useDispatch()

 


  const handleVote = (number) => {
    dispatch(changeUserVote({id: props.initiative.id, number: number}))
    const voteCount = groupInitiatives.map(initiative => {
      if (initiative.id === props.initiative.id) {
        return initiative.userVotes + number
      } else {
        return initiative.userVotes
      }
    })
    console.log(voteCount)
    dispatch(updateVoteCredits({id: currentGroup.id, array:voteCount}))
  };


  return (
    <Box sx={{ display: "flex" }}>
      <IconButton aria-label="delete" size="small" onClick={() => handleVote(-1)}>
        <RemoveCircleIcon fontSize="large" color="primary" />
      </IconButton>
      <Typography variant="h5" sx={{ display: "block", m: 1 }}>
        {props.initiative.userVotes}
      </Typography>
      <IconButton aria-label="delete" size="small" onClick={() => handleVote(1)}>
        <AddCircleIcon fontSize="large" color="primary" />
      </IconButton>
    </Box>
  );
};

export default VoteControl;
