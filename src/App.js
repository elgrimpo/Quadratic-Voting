//React Imports
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI Imports
import { Box, Divider, AppBar } from "@mui/material";
//import { ThemeProvider, createTheme } from '@mui/material/styles';

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

/* ----------- COMPONENT -------------- */

function App() {
  const [communities, setCommunities] = useState(communityList);
  const [currentCommunity, setCurrentCommunity] = useState(communityList[0]);

  const [groups, setGroup] = useState(groupList);
  const [currentGroup, setCurrentGroup] = useState(groupList[0]);

  const [channels, setChannels] = useState(channelList);
  const [currentChannel, setCurrentChannel] = useState(null);

  const [initiatives, setInitiatives] = useState(
    initiativeList.filter((item) => item.groupID === currentGroup.id)
  );
  const [currentInitiative, setCurrentInitiative] = useState(initiativeList[0]);

  const [users, setUsers] = useState(userList);

  useEffect(() => {
    setInitiatives(
      initiativeList.filter((item) => item.groupID === currentGroup.id)
    );
  }, [currentGroup]);

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
      }}
    >
      <div style={{  
            display: 'grid',
	          gridTemplateColumns: '330px 1fr',
            height: '100%',
            width: '100%'}}>

        <Box style={{display: 'flex'}}>
          <Communities />
          <Divider orientation="vertical" flexItem />
          <MainNav />
          <Divider orientation="vertical" flexItem />
        </Box>

        
          <Routes>
            <Route path="/" element={<InitiativesList />} />
            <Route path="/initiativedetails" element={<InitiativeDetails />} />
          </Routes>
        
      </div>
    </DataContext.Provider>
  );
}

export default App;
