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
  Box,
  IconButton,
  Fab,
  Button,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReactMarkdown from "react-markdown";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const InitiativeCard = (props) => {
  const { currentGroup, initiatives, setCurrentInitiative } =
    useContext(DataContext);
  const theme = useTheme();

  function handleListItemClick(index) {
    console.log("triggered");
    setCurrentInitiative(initiatives[index]);
  }

  return (
    <Grid item>
      <Link
        to="/initiativedetails"
        style={{ textDecoration: "none" }}
        onClick={() => {
          handleListItemClick(initiatives.indexOf(props.initiative));
        }}
      >
        <Card sx={{ maxWidth: 300 }} style={{ paddingBottom: 10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={props.initiative.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.initiative.title}
              </Typography>
              <Typography>{props.initiative.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" startIcon={<ThumbUpOffAltIcon />}>
              Vote
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

export default InitiativeCard;
