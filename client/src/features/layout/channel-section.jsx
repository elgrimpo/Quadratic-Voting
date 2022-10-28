import React from "react";
import { ChannelList } from "stream-chat-react";
import GroupChannelList from "./channel-list";

//App imports


const ChannelSection = () => {
  return (
    <div>
      <p>ChannelList</p>
      {/* FIXME: Generates error
      <ChannelList 
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
            <GroupChannelList 
            {... listProps} 
            type="group"/>
        )} />*/}

    </div>
  );
};

export default ChannelSection;
