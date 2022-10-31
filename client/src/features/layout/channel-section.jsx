import React from "react";

import { ChannelList, useChatContext } from "stream-chat-react";
import { selectCurrentUser } from "../../reducers/usersSlice";
import { useSelector } from "react-redux";

//MUI Imports
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Link,
} from "@mui/material";

//App imports
import GroupChannelList from "./channel-list";

const ChannelSection = () => {
  const { client, setActiveChannel } = useChatContext();
  const CustomPreview = ({ displayTitle }) => {
    return (
      <Link
        key={displayTitle}
        to={`/`} //TODO: to be updated
        style={{ textDecoration: "none" }}
      >
        <ListItemButton selected={false}>
          <ListItemText id="main-nav-items" primary={displayTitle} />
        </ListItemButton>
      </Link>
    );
  };

  return (
    <Box>
      {/* ---> Header and Add Button <--- */}

      <Box id="groupsection-header">
        <Typography
          id="groupsection-title"
          variant="h7"
          sx={{ color: "primary.main" }}
        >
          Channels
        </Typography>
      </Box>
      <ChannelList
        List={(listProps) => <GroupChannelList {...listProps} type="group" />}
        Preview={CustomPreview}
        style={{size: "100%"}}
      />
    </Box>
  );
};

/* TODO: User within ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        
        List={(listProps) => (
            <GroupChannelList 
            {... listProps} 
            type="group"/>
        )} 




        
        */

export default ChannelSection;
