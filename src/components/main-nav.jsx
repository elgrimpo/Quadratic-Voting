import React, {useState} from 'react'
import {List, ListItemButton, ListItemText, ListSubheader, Divider, Toolbar} from '@mui/material'
import { Link } from "react-router-dom";



function MainNav(props) {

    function handleListItemClick (index) {
            props.setCurrentGroup(props.groups[index])
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
          <Link to='/' style={{textDecoration: 'none', color: 'black'}} >
          <ListItemButton 
          button 
          key={group.id}
          selected={group.id === props.currentGroup.id}
          onClick={() => {
              handleListItemClick(props.groups.indexOf(group));
            }}>
            <ListItemText primary={group.title} />
          </ListItemButton>
          </Link>
          
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