//React Imports
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

//App Imports
import { VoteControl } from "../index";
import {
  selectGroupInitiatives,
  setCurrentInitiative,
} from "../../reducers/initiativesSlice";


/* ----------- COMPONENT -------------- */

const InitiativeCard = (props) => {
  let { groupId, communityName } = useParams();

  return (
    <Grid item key={props.initiative._id}>
      <Card style={{ paddingBottom: 10 }}>
        <Link
          to={`/${communityName}/group/${groupId}/initiative/${props.initiative._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.initiative.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props.initiative.title}
              </Typography>
              <Typography
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                variant="body2"
              >
                {props.initiative.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <VoteControl initiative={props.initiative} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default InitiativeCard;
