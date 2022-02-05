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

  /*---> GROUPS <--- */
  const [groups, setGroup] = useState(groupList);
  const [currentGroup, setCurrentGroup] = useState(groupList[0]);

  /*---> CHANNELS <--- */
  const [channels, setChannels] = useState(channelList);
  const [currentChannel, setCurrentChannel] = useState(0);

  /*---> INITIATIVES <--- */
  const [initiatives, setInitiatives] = useState(
    initiativeList.filter((item) => item.groupID === currentGroup.id)
  );
  const [currentInitiative, setCurrentInitiative] = useState(initiativeList[0]);

  /*---> USERS <--- */
  const [users, setUsers] = useState(userList);
  const [sidebarContent, setSidebarContent] = useState(currentGroup);

  /*---------- FUNCTIONS ---------- */
  useEffect(() => {
    setInitiatives(
      initiativeList.filter((item) => item.groupID === currentGroup.id)
    );
  }, [currentGroup]);

  useEffect(() => {
    setSidebarContent(currentGroup);
  }, [currentGroup]);

  useEffect(() => {
    setSidebarContent(currentInitiative);
  }, [currentInitiative]);

  return (
    <DataContext.Provider
      value={{
        communities,
        setCommunities,
        currentCommunity,
        setCurrentCommunity,
        groups,
        setGroup,
        currentGroup,
        setCurrentGroup,
        channels,
        setChannels,
        currentChannel,
        setCurrentChannel,
        initiatives,
        setInitiatives,
        currentInitiative,
        setCurrentInitiative,
        users,
        setUsers,
        sidebarContent,
        setSidebarContent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
