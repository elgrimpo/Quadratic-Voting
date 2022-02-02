import './App.css';
import React, {useState, useEffect} from 'react'
import { Box, Divider, AppBar, Fab, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Communities, InitiativesList, MainNav, Sidebar, TabNav} from './components'
import {initiativeList} from './data/initiatives'
import {groupList} from './data/groups'
import {channelList} from './data/channels'
import AddIcon from '@mui/icons-material/Add';


function App() {
  
  const [groups, setGroup] = useState(groupList)
  const [currentGroup, setCurrentGroup] = useState(groupList[0])

  const [channels, setChannels] = useState(channelList)
  const [currentChannel, setCurrentChannel] = useState(null)

  const [initiatives, setInitiatives] = useState (initiativeList.filter(item => item.groupID === currentGroup.id))
  const [currentInitiative, setCurrentInitiative] = useState (null)
  
  useEffect(() => {
    setInitiatives(initiativeList.filter(item => item.groupID === currentGroup.id))
  }, [currentGroup])

  return (
      <div id='grid'>
          <Box id='left-nav'>
              <Communities />
              <Divider orientation="vertical" flexItem />
              <MainNav 
                groups={groups}
                setGroup={setGroup}
                currentGroup={currentGroup}
                setCurrentGroup={setCurrentGroup}
                channels={channels}
                currentChannel={currentChannel}
                setCurrentChannel={setCurrentChannel}
                />
              <Divider orientation="vertical" flexItem />
          </Box>
          
          <Box id='main-content'>
          <AppBar style={{position: 'sticky', top:0, width:'100%'}}>
            <TabNav />
          </AppBar>
          <Divider />
          <InitiativesList initiatives={initiatives} currentGroup={currentGroup}/>
          </Box>

          
          <Box id='sidebar'>
          
            <Sidebar currentGroup={currentGroup}/>
          </Box>





        
        

        
      </div>
  );
}

export default App;
