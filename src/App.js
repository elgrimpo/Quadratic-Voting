//React
import './App.css';
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI
import { Box, Divider, AppBar } from '@mui/material';
//import { ThemeProvider, createTheme } from '@mui/material/styles';

//App
import {Communities, InitiativesList, InitiativeDetails, MainNav, Sidebar, TabNav} from './components'
import {initiativeList, groupList, channelList, communityList, userList} from './data'
import {DataContext} from './contexts/data-context'


function App() {
  
  const [communities, setCommunities] = useState(communityList);
  const [currentCommunity, setCurrentCommunity] = useState(communityList[0])
  
  const [groups, setGroup] = useState(groupList)
  const [currentGroup, setCurrentGroup] = useState(groupList[0])

  const [channels, setChannels] = useState(channelList)
  const [currentChannel, setCurrentChannel] = useState(null)

  const [initiatives, setInitiatives] = useState (initiativeList.filter(item => item.groupID === currentGroup.id))
  const [currentInitiative, setCurrentInitiative] = useState (initiativeList[0])

  const [users, setUsers] = useState(userList)
  
  useEffect(() => {
    setInitiatives(initiativeList.filter(item => item.groupID === currentGroup.id))
  }, [currentGroup])

  return (
      <DataContext.Provider value={{communities, setCommunities, currentCommunity, setCurrentCommunity, groups, setGroup, currentGroup, setCurrentGroup, channels, setChannels,currentChannel, setCurrentChannel, initiatives, setInitiatives, currentInitiative, setCurrentInitiative, users, setUsers}}>
      <div id='grid'>
          <Box id='left-nav'>
              <Communities 
                />
              <Divider orientation="vertical" flexItem />
              <MainNav 
                />
              <Divider orientation="vertical" flexItem />
          </Box>
          
          <Box id='main-content'>
          <AppBar style={{position: 'sticky', top:0, width:'100%'}}>
            <TabNav />
          </AppBar>
          <Divider />
            <Routes>
              <Route 
                path="/" 
                element={<InitiativesList/>} />
              <Route 
                path="/initiativedetails" 
                element={<InitiativeDetails/>} />
            </Routes>
          </Box>
          <Box id='sidebar' >
            <Sidebar/>
          </Box>
      </div>
      </DataContext.Provider>
  );
}

export default App;
