import React, {useState} from 'react'
import {List, ListItemButton, ListItemText, ListSubheader, Divider, Toolbar} from '@mui/material'



function MainNav(props) {
    const [selectedIndex, setSelectedIndex] = useState();
    const [initiatives, setInitiatives] = useState(['Improve marketplate', 'Feature requests', 'Process improvements', 'Hackathons'])

    const [channels, setChannels] = useState(['# General', '# New Ideas', '# Improvements', '# Huddle'])


    async function handleListItemClick (index) {
            props.setCurrentGroup(props.groups[index])
            props.updateInitiatives()
    };

    return (
        <div id='main-nav'>
            <Toolbar variant='dense'/>
            <Divider />

            <List>
            <ListSubheader component="div" >
          Groups
        </ListSubheader>
        {props.groups.map((group) => (
          <ListItemButton 
          button 
          key={group.id}
          selected={group.id === props.currentGroup.id}
          onClick={() => {
              handleListItemClick(props.groups.indexOf(group));
            }}>
            <ListItemText primary={group.title} />
          </ListItemButton>
        ))}
      </List>
      <Divider />


      <List>
            <ListSubheader component="div" >
          Channels
        </ListSubheader>
        {props.channels.map((channel) => (
          <ListItemButton 
          button 
          key={channel.id}
          >
            <ListItemText primary={channel.title} />
          </ListItemButton>
        ))}
      </List>
        </div>
    )
}

export default MainNav