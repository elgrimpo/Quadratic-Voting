import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChatContext
} from "stream-chat-react";
import { selectCurrentUser } from "../../reducers/usersSlice";
import { useSelector } from "react-redux";



import "stream-chat-react/dist/css/index.css";
import { useParams } from "react-router-dom";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { fx } from "../../utils";


const ChatWindow = () => {
  const currentUser = useSelector(selectCurrentUser);
  let { groupId, communityName, initiativeId } = useParams();
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

  return (
      <Channel channel={channel}>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
  );
};

export default ChatWindow;
