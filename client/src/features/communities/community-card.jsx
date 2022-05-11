//React Imports
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//MUI Imports
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckIcon from "@mui/icons-material/Check";

//App Imports
import {
  selectCurrentUser,
  selectIsLoggedIn,
  updateUser,
  fetchCurrentUser,
} from "../../reducers/usersSlice";
import { fetchCommunities } from "../../reducers/communitiesSlice";
import { userActions } from "../../utils";

/* ----------- COMPONENT -------------- */

const CommunityCard = (props) => {
  // Variables
  const community = props.community;
  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // Functions
  const isSubscribed = userActions.checkSubscription(
    currentUser,
    props.community
  );
  const handleSubscriptionUpdate = async () => {
    //TODO: FIX
    if (isLoggedIn) {
      const newUser = userActions.updateSubscription(
        currentUser,
        props.community
      );
      await dispatch(updateUser(newUser));
      await dispatch(fetchCurrentUser());
      await dispatch(
        fetchCommunities(
          newUser.subscriptions.map((subscription) => {
            return subscription.communityId;
          })
        )
      );
    } else {
      window.open("http://localhost:5000/auth/google", "_self");
    }
  };

  return (
    <Card id="initiatives-grid-item" variant="outlined">
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
            onClick={() => handleSubscriptionUpdate()}
          >
            Subscribed
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<BookmarkIcon />}
            style={{ marginRight: "10px" }}
            onClick={() => handleSubscriptionUpdate()}
          >
            Subscribe
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CommunityCard;
