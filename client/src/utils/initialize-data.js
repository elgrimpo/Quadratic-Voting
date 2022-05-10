import { store } from "../app/store";
import { createStore } from "redux";

import { fetchCommunities, updateCurrentCommunity } from "../reducers/communitiesSlice";
import { fetchGroups } from "../reducers/groupsSlice";
import { fetchInitiatives } from "../reducers/initiativesSlice";
import { fetchCurrentUser, fetchUsers, selectIsLoggedIn } from "../reducers/usersSlice";
import { useSelector, useDispatch } from "react-redux";

export const initializeData = async () => {
  //const state = store.getState()
  const isLoggedIn = store.getState().users.isLoggedIn;

  await store.dispatch(fetchCurrentUser())
  console.log("currentuser complete");

  if (isLoggedIn) {

    store.dispatch(fetchUsers());
    console.log("users complete");
  }

  const subscriptions = store.getState().users.currentUser.subscriptions.map((subscription) => {return subscription.communityId})

  await store.dispatch(fetchCommunities(subscriptions));

  console.log("communities complete");
  console.log(store.getState().communities)


  await store.dispatch(fetchGroups(subscriptions));
  console.log("groups complete");
  console.log(store.getState().groups)

  await store.dispatch(fetchInitiatives(subscriptions));
  console.log("initiatives complete");
  console.log(store.getState().initiatives)

};
