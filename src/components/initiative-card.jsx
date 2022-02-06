//React Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const InitiativeCard = (props) => {
  const {
    initiatives,
    setCurrentInitiative,
    currentInitiative,
    setSidebarContent,
  } = useContext(DataContext);

  function handleListItemClick(index) {
    setCurrentInitiative(initiatives[index]);
    setSidebarContent(currentInitiative);
  }

  return (
    <Grid item key={props.initiative.id}>
      <Link
        key={props.initiative.id}
        to="/initiativedetails"
        style={{ textDecoration: "none" }}
        onClick={() => {
          handleListItemClick(initiatives.indexOf(props.initiative));
        }}
      >
        <Card
          style={{ paddingBottom: 10 }}
          key={props.initiative.id}
        >
          <CardActionArea key={props.initiative.id}>
            <CardMedia
              key={props.initiative.id}
              component="img"
              alt="green iguana"
              height="140"
              image={props.initiative.image}
            />
            <CardContent key={props.initiative.id}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                key={props.initiative.id}
              >
                {props.initiative.title}
              </Typography>
              <Typography
                key={props.initiative.id}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {props.initiative.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            key={props.initiative.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              key={props.initiative.id}
              variant="contained"
              startIcon={<ThumbUpOffAltIcon />}
            >
              Vote
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

export default InitiativeCard;
