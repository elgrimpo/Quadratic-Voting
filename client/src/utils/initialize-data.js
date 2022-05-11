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

  if (isLoggedIn) {

    store.dispatch(fetchUsers());
  }

  const subscriptions = store.getState().users.currentUser.subscriptions.map((subscription) => {return subscription.communityId})

  await store.dispatch(fetchCommunities(subscriptions));

  await store.dispatch(fetchGroups(subscriptions));


  await store.dispatch(fetchInitiatives(subscriptions));

};
