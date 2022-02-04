//React Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//MUI Imports
import { Typography, Box, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

//App Imports
import { DataContext } from "../contexts/data-context";
import {
  Sidebar,
  TabNav,
} from "./index";

/* ----------- COMPONENT -------------- */

const InitiativeDetails = (props) => {
const { currentInitiative, users } = useContext(DataContext);
const owner = users.filter((user) => user.id === currentInitiative.owner)

  return (
    <div style={{
        height: '100vh',
        display: "grid",
        gridTemplateColumns: "1fr 1px 350px",
      }}>
        <Box style={{
            height: '100%',
            overflow: 'scroll'}}>
        <TabNav />
      <img
        src={currentInitiative.image}
        alt={currentInitiative.title}
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
        }}
      />

      <Box style={{ padding: 30 }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
          <ArrowBackIcon style={{ marginRight: 12 }} />
          <Typography>Back to overview</Typography>
        </Link>
      </Box>
      
  
      <Box style={{ paddingLeft: 30, paddingRight: 30 }}>
      <Typography style={{marginBottom: '30px'}}>{currentInitiative.text()}</Typography>
      </Box>

      </Box>
      <Divider orientation="vertical" flexItem />
      <Box id="sidebar" style={{display: 'flex'}}>
    
        <Sidebar 
          title={currentInitiative.title}
          description={currentInitiative.description}
          owner={owner[0].image}/>
      </Box>
    </div>
  );
};

export default InitiativeDetails;
