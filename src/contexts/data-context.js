import React, { createContext, useState, useEffect } from "react";
import {
  initiativeList,
  groupList,
  channelList,
  communityList,
  userList,
} from "../data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {


  /*---> COMMUNITIES <--- */
  const [communities, setCommunities] = useState(communityList);
  const [currentCommunity, setCurrentCommunity] = useState(communityList[0]);

  /*---> CHANNELS <--- */
  const [channels, setChannels] = useState(channelList);
  const [currentChannel, setCurrentChannel] = useState(0);

  /*---> USERS <--- */
  const [users, setUsers] = useState(userList);
  const [currentUser, setCurrentUser] = useState(users[5])

  /*---------- FUNCTIONS ---------- */


  return (
    <DataContext.Provider
      value={{
        communities,
        setCommunities,
        currentCommunity,
        setCurrentCommunity,
        channels,
        setChannels,
        currentChannel,
        setCurrentChannel,
        users,
        setUsers,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
