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
} from "stream-chat-react";
import { selectCurrentUser } from "../../reducers/usersSlice";
import { useSelector } from "react-redux";



import "stream-chat-react/dist/css/index.css";
import { useParams } from "react-router-dom";
import { selectInitiatives } from "../../reducers/initiativesSlice";
import { fx } from "../../utils";

const apiKey = process.env.REACT_APP_STREAMCHAT_API_KEY;
const userToken = process.env.REACT_APP_STREAMCHAT_USER_TOKEN;

// const filters = { type: 'messaging', members: { $in: ['still-snowflake-4'] } };
// const sort = { last_message_at: -1 };

// const CustomChannelPreview = (props) => {
//   const { channel, setActiveChannel } = props;

//   const { messages } = channel.state;
//   const messagePreview = messages[messages.length - 1]?.text.slice(0, 30);

//   return (
//     <div onClick={() => setActiveChannel(channel)} style={{ margin: '12px' }}>
//       <div>{channel.data.name || 'Unnamed Channel'}</div>
//       <div style={{ fontSize: '14px' }}>{messagePreview}</div>
//     </div>
//   );
// };

const ChatWindow = () => {
  console.log(process.env.REACT_APP_STREAMCHAT_API_KEY)
  const currentUser = useSelector(selectCurrentUser);
  let { groupId, communityName, initiativeId } = useParams();
  const initiatives = useSelector(selectInitiatives);
  const currentInitiative = fx.data.findById(initiatives, initiativeId);
  
  const client = StreamChat.getInstance(apiKey, {
    enableInsights: true,
    enableWSFallback: true,
  });
  client.connectUser(
    { id: currentUser._id, name: currentUser.name, image: currentUser.image },
    //TODO: Change devToken
    client.devToken(currentUser._id)
  );
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
      client.disconnectUser();
      window.removeEventListener("message", (event) =>
        handleColorChange(event.data)
      );
    };
  }, []);

  const channel = client.channel("messaging", currentInitiative._id, {
    // add as many custom fields as you'd like
    name: currentInitiative.title,
    members: ["raspy-snowflake-4"],
  });

  return (
    <Chat client={client} theme="messaging light">
      {/* <ChannelList filters={filters} sort={sort} Preview={CustomChannelPreview} /> */}
      <Channel channel={channel}>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatWindow;
