//React Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//MUI Imports
import { Typography, Box, Divider, AppBar, Paper, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactMarkdown from "react-markdown";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";
import { Sidebar, TabNav, Chat } from "./index";

/* ----------- COMPONENT -------------- */

const InitiativeDetails = (props) => {
  const theme = useTheme();
  const { currentInitiative, users, sidebarContent, setSidebarContent, currentGroup } = useContext(DataContext);
  const [value, setValue] = React.useState("Overview");

  const handleClick = () => {
    setSidebarContent(currentGroup)
  }
  return (

      <TabContext value={value}>

{/* ---> Tabs <--- */}

        <TabNav setValue={setValue} />

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
            <Box style={{ padding: 30 }}>
              <Link to="/" style={{ textDecoration: "none", display: "flex"}}>
                <Button variant="text" startIcon={<ArrowBackIcon />} onClick={handleClick}>
                  Back to overview
                </Button>
              </Link>
            </Box>
            
            <Box style={{ paddingLeft: 30, paddingRight: 30 }}>
              <Typography style={{ marginBottom: "30px" }}>
                {currentInitiative.text()}
              </Typography>
            </Box>

{/* Initiative Content */}
        </TabPanel>

{/* ---> Chat <--- */}
        <TabPanel value="Chat" style={{ padding: 0 }}>
          <Chat currentInitiative={currentInitiative.title} />
        </TabPanel>
      </TabContext>
  );
};

export default InitiativeDetails;
