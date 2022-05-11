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

const CommunityCard = (props) => {
  const community = props.community

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

      </CardActions>
    </Card>
  );
};

export default CommunityCard;
