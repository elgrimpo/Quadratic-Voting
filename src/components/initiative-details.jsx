//React Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//MUI Imports
import { Typography, Box, Divider, AppBar } from "@mui/material";
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
  const { currentInitiative, users } = useContext(DataContext);
  const owner = users.filter((user) => user.id === currentInitiative.owner);
  const [value, setValue] = React.useState("Overview");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1px 350px",
      }}
    >
      <Box
        style={{
          height: "100%",
          overflow: "scroll",
        }}
      >
        <TabContext value={value}>
          <TabNav setValue={setValue} />

          <TabPanel value="Overview" style={{ padding: 0 }}>
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
              <Typography style={{ marginBottom: "30px" }}>
                {currentInitiative.text()}
              </Typography>
            </Box>
          </TabPanel>

          <TabPanel value="Chat" style={{ padding: 0 }}>
            <Chat currentInitiative={currentInitiative.title} />
          </TabPanel>
        </TabContext>
      </Box>

      <Divider orientation="vertical" flexItem />
      
      <Box id="sidebar" >
        <Sidebar
          title={currentInitiative.title}
          description={currentInitiative.description}
          owner={owner[0].image}
        />
      </Box>
    </div>
  );
};

export default InitiativeDetails;
