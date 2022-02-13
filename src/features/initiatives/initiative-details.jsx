//React Imports
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


//MUI Imports
import { Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";


//App Imports
import { TabNav, Chat } from "../../components/index";
import { selectCurrentInitiative, removeCurrentInitiativeSelection } from '../../store/initiatives/initiativesSlice'



/* ----------- COMPONENT -------------- */

const InitiativeDetails = (props) => {

  const currentInitiative = useSelector(selectCurrentInitiative)
  const dispatch = useDispatch()


  const [value, setValue] = React.useState("Overview");

  const handleClick = () => {
    dispatch(removeCurrentInitiativeSelection());
  };
  return (
    <TabContext value={value}>
      {/* ---> Tabs <--- */}

      <TabNav setValue={setValue} handleDrawerToggle={props.handleDrawerToggle}/>
      

      {/* ---> Initiative Overview <--- */}

      <TabPanel value="Overview" style={{ padding: 0 }}>
        
        {/* Banner image */}
        <img
          src={currentInitiative.image}
          alt={currentInitiative.title}
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />

        {/* Back navigation */}
        <Box style={{ paddingLeft: 30, paddingTop: 12, paddingBottom: 12 }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              onClick={handleClick}
            >
              Back to overview
            </Button>
          </Link>
        </Box>


        {/* Initiative Content */}
        <Box style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Typography style={{ marginBottom: "30px" }}>
            {currentInitiative.text}
          </Typography>
        </Box>

        
      </TabPanel>

      {/* ---> Chat <--- */}
      <TabPanel value="Chat" style={{ padding: 0 }}>
        <Chat currentInitiative={currentInitiative.title} />
      </TabPanel>
    </TabContext>
  );
};

export default InitiativeDetails;
