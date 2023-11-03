//React Imports
import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "../../reducers/usersSlice";
import { fx } from "../../utils";
/* ----------- COMPONENT -------------- */

const CommunityCard = (props) => {
  // API's
  let navigate = useNavigate();
  
  // Variables
  const community = props.community;
  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // Functions
  const isSubscribed = fx.subscriptions.checkSubscription(
    currentUser,
    props.community
  );
  const handleSubscriptionUpdate = async () => {
    //TODO: Trigger snackbar
    if (isLoggedIn) {
      const response = fx.subscriptions.updateSubscription(
        currentUser,
        props.community
      );
      await dispatch(updateUser(response.newUser));
      fx.data.updateStore(response.newSubscriptions)
    } else {
      window.open("https://quadratic-voting.onrender.com/auth/google", "_self");
    }
  };

  const handleNavigate = async () => {
    if (!isSubscribed) {
      // adds community and its groups & initiatives to the store without updating the database
    const response = fx.subscriptions.updateSubscription(
      currentUser,
      props.community
    );
    await fx.data.updateStore(response.newSubscriptions) 
    };
    props.onClose()
    navigate(`/${props.community.name}/overview`);
  }

  return (
    <Card id="initiatives-grid-item" variant="outlined">

        <CardActionArea>
          <CardMedia
            component="img"
            height="240px"
            image={community.logo_url}
            onClick={() => handleNavigate()}
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

      <CardActions id="card-actions" style={{marginBottom: "10px"}} > 
        {isSubscribed ? (
          <Button
            variant="outlined"
            startIcon={<CheckIcon />}
            style={{  }}
            onClick={() => handleSubscriptionUpdate()}
          >
            Subscribed
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<BookmarkIcon />}
            style={{  }}
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
