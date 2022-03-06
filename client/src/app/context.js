import React, { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectCommunities} from "../reducers/communitiesSlice";


export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  /*---> COMMUNITIES <--- */
  const [currentCommunity, setCurrentCommunity] = useState('phoenix');

  /*---> GROUPS <--- */
  //const [currentGroup, setCurrentGroup] = useState(groupList[0]);



  /*---> INITIATIVES <--- */
  //const [currentInitiative, setCurrentInitiative] = useState(initiativeList[0]);



  /*---------- FUNCTIONS ---------- */


  return (
    <StateContext.Provider
      value={{
        currentCommunity,
        setCurrentCommunity,
        //currentGroup,
        //setCurrentGroup,
        //currentInitiative,
        //setCurrentInitiative,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};