//React Imports
import React from "react";
import { Link, useParams } from "react-router-dom";

//MUI Imports
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";

//App Imports
import { VoteControl } from "../index";

/* ----------- COMPONENT -------------- */

const InitiativeCard = (props) => {
  let { groupId, communityName } = useParams();

  return (
    <Card id="initiatives-grid-item" variant="outlined">
      <Link
        to={`/${communityName}/group/${groupId}/initiative/${props.initiative._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.initiative.image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.initiative.title}
            </Typography>
            <Typography id="card-text-body" variant="body2">
              {props.initiative.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions id="card-actions">
        <VoteControl initiative={props.initiative} />
      </CardActions>
    </Card>
  );
};

export default InitiativeCard;
