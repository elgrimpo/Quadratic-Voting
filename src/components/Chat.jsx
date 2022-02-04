//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Typography, Stack, Link, Divider, Avatar, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const Chat = (props) => {

  return (
    <div style={{width:'80%', margin: 'auto', padding:200, textAlign:'center'}}>    
        <Typography variant='h5'>
          This will be become a chatroom for
        </Typography>
        <Typography variant='h4'>
          {props.currentInitiative}
        </Typography>
    </div>
  )
}


export default Chat;