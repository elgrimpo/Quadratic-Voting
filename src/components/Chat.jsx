//React Imports
import React from "react";

//MUI Imports
import { Typography } from "@mui/material";

//App Imports

/* ----------- COMPONENT -------------- */

const Chat = (props) => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        padding: 200,
        textAlign: "center",
      }}
    >
      <Typography variant="h5">This will be become a chatroom for</Typography>
      <Typography variant="h4">{props.currentInitiative}</Typography>
    </div>
  );
};

export default Chat;
