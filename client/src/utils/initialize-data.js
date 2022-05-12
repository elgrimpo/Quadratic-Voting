import { store } from "../app/store";

import { fetchCommunities } from "../reducers/communitiesSlice";
import { fetchGroups } from "../reducers/groupsSlice";
import { fetchInitiatives } from "../reducers/initiativesSlice";
import { fetchCurrentUser, fetchUsers } from "../reducers/usersSlice";


export const initializeData = async () => {
  //const state = store.getState()
  const isLoggedIn = store.getState().users.isLoggedIn;

  //TODO: should this come after (isLoggedIn)?
  await store.dispatch(fetchCurrentUser())

  if (isLoggedIn) {

    await store.dispatch(fetchCurrentUser())
  }

  const subscriptions = store.getState().users.currentUser.subscriptions.map((subscription) => {return subscription.communityId})

  await store.dispatch(fetchCommunities(subscriptions));

  await store.dispatch(fetchGroups(subscriptions));

  await store.dispatch(fetchInitiatives(subscriptions));

};
