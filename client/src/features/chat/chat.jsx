import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChatContext,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";
import { useParams } from "react-router-dom";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { fx } from "../../utils";

import { Button, Box, Typography, Card } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckIcon from "@mui/icons-material/Check";

import { selectCurrentUser, updateUser } from "../../reducers/usersSlice";

const ChatWindow = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  let { initiativeId } = useParams();
  const initiatives = useSelector(selectInitiatives);
  const currentInitiative = fx.data.findById(initiatives, initiativeId);
  const { client, setActiveChannel } = useChatContext();

  //TODO: Check what this is doing exactly
  useEffect(() => {
    const handleColorChange = (color) => {
      const root = document.documentElement;
      if (color.length && color.length === 7) {
        root.style.setProperty("--primary-color", `${color}E6`);
        root.style.setProperty("--primary-color-alpha", `${color}1A`);
      }
    };
    window.addEventListener("message", (event) =>
      handleColorChange(event.data)
    );
    return () => {
      window.removeEventListener("message", (event) =>
        handleColorChange(event.data)
      );
    };
  }, []);

  //TODO: Apart from the "Messaging" type, should there be an "Initiative" and "Group" type?
  const channel = client.channel("messaging", currentInitiative._id, {
    // add as many custom fields as you'd like
    name: currentInitiative.title,
    members: [currentUser._id],
  });

  const isSubscribed = fx.channels.checkSubscription(currentUser, channel);

  const handleSubscriptionUpdate = async () => {
    // TODO: Add / remove user as member to channel
    const response = fx.channels.updateSubscription(currentUser, channel);
    dispatch(updateUser(response.newUser));
  };

  return (
    <Channel channel={channel}>
      <Window>
        <Card
        style={{
          paddingTop: 20,
          paddingLeft: 30,
          paddingBottom: 20,
          border: "1px solid #E0E0E0",
        }}
        variant="outlined">
          <Typography variant="h6">{currentInitiative.title}</Typography>
          {isSubscribed ? (
            <Button
              variant="outlined"
              startIcon={<CheckIcon />}
              style={{ marginRight: "10px", marginTop: "10px" }}
              onClick={() => handleSubscriptionUpdate()}
            >
              Subscribed
            </Button>
          ) : (
            <Button
              variant="contained"
              startIcon={<BookmarkIcon />}
              style={{ marginRight: "10px", marginTop: "10px" }}              onClick={() => handleSubscriptionUpdate()}
            >
              Subscribe
            </Button>
          )}
        </Card>
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  );
};

export default ChatWindow;
