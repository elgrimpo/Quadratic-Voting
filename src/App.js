//React Imports
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI Imports
import { Box, Divider, AppBar, Paper } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';


//App Imports
import {
  Communities,
  InitiativesList,
  InitiativeDetails,
  MainNav,
  Sidebar,
  TabNav,
} from "./components";
import {
  initiativeList,
  groupList,
  channelList,
  communityList,
  userList,
} from "./data";
import { DataContext } from "./contexts/data-context";
import { palette } from "@mui/system";
import {darkTheme, lightTheme} from './styles/themeProvider'


/* ----------- COMPONENT -------------- */

function App() {
  const [communities, setCommunities] = useState(communityList);
  const [currentCommunity, setCurrentCommunity] = useState(communityList[0]);

  const [groups, setGroup] = useState(groupList);
  const [currentGroup, setCurrentGroup] = useState(groupList[0]);

  const [channels, setChannels] = useState(channelList);
  const [currentChannel, setCurrentChannel] = useState(0);

  const [initiatives, setInitiatives] = useState(
  initiativeList.filter((item) => item.groupID === currentGroup.id)
  );
  const [currentInitiative, setCurrentInitiative] = useState(initiativeList[0]);

  const [users, setUsers] = useState(userList);

  const [sidebarContent, setSidebarContent] = useState(currentGroup);

  useEffect(() => {
    setInitiatives(
      initiativeList.filter((item) => item.groupID === currentGroup.id)
    )}, [currentGroup]);


  useEffect(() => {
    setSidebarContent(currentGroup)
  }, [currentGroup]);

  useEffect(() => {
    setSidebarContent(currentInitiative)
  }, [currentInitiative]);

  return (
    <DataContext.Provider
      value={{
        communities,
        setCommunities,
        currentCommunity,
        setCurrentCommunity,
        groups,
        setGroup,
        currentGroup,
        setCurrentGroup,
        channels,
        setChannels,
        currentChannel,
        setCurrentChannel,
        initiatives,
        setInitiatives,
        currentInitiative,
        setCurrentInitiative,
        users,
        setUsers,
        sidebarContent,
        setSidebarContent,
      }}
    >
      <div 
      style={{  
            display: 'grid',
	          gridTemplateColumns: '380px 1fr 320px',
            height: '100%',
            width: '100%',
            background: 'linear-gradient(175deg, #2C7772 30%, #264F60 90%)'}}>
               
{/* ---> Navigation <--- */}

        <Box style={{display: 'flex'}}>
          <Communities />
          <MainNav />
        </Box>

{/* ---> Main Content <--- */}


      <ThemeProvider theme={lightTheme}>
      <Paper
      elevation={5}
      style={{
        height:'100%',
        overflow: "scroll",
        background: 'white',
        borderRadius:0
      }}>
          <Routes>
            <Route path="/" element={<InitiativesList />} />
            <Route path="/initiativedetails" element={<InitiativeDetails />} />
          </Routes>
          </Paper>
      </ThemeProvider>
        
{/* ---> Sidebar <--- */}

          <Box id="sidebar"> 
          <Sidebar
        />
        </Box>
      </div>
    </DataContext.Provider>
  );
}

export default App;
