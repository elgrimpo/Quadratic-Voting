//React Imports
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

//MUI Imports
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Grid,
  Button,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CheckIcon from "@mui/icons-material/Check";

//App Imports
import { VoteControl } from "../index";
import { selectCurrentUser, updateUser, fetchCurrentUser } from "../../reducers/usersSlice";
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";

/* ----------- COMPONENT -------------- */

const CommunityCard = (props) => {
  // Variables
  const community = props.community
  const currentUser = useSelector(selectCurrentUser);
  const currentCommunity = useSelector(selectCurrentCommunity);
  const dispatch = useDispatch()

 

// Functions
const checkSubscription = (user, community) => {
  const index = user.subscriptions?.findIndex(
    (subscription) => subscription?.communityId === community?._id
  );
  if (index === -1) {
    return false;
  } else {
    return true;
  }
};


const isSubscribed = checkSubscription(currentUser, props.community);

const updateSubscription = async (user, community) => {
  const isSubscribed = checkSubscription(user, community);
  if (isSubscribed) {
    const newSubscriptions = user.subscriptions.filter(subscription => subscription.communityId !== community._id)
    const newUser = {...user, subscriptions: newSubscriptions}      
    await dispatch(updateUser(newUser))
  } else {
    const newSubscriptions = [{communityId: community._id}, ...user.subscriptions]
    const newUser = {...user, subscriptions: newSubscriptions}      
    await dispatch(updateUser(newUser))

  }
  dispatch(fetchCurrentUser());

};

  return (
    <Card id="initiatives-grid-item" variant="outlined" >
      <Link
        to={`/${community.name}/`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240px"
            image={community.logo_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {community.name}
            </Typography>
            <Typography id="card-text-body" variant="body2">
              {community.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions id="card-actions">
      {isSubscribed ? (
                <Button
                  variant="outlined"
                  startIcon={<CheckIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={() =>
                    updateSubscription(currentUser, props.community)
                  }
                >
                  Subscribed
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<BookmarkIcon />}
                  style={{ marginRight: "10px" }}
                  onClick={() =>
                    updateSubscription(currentUser, props.community)}
                >
                  Subscribe
                </Button>
              )}
      </CardActions>
    </Card>
  );
};

export default CommunityCard;
