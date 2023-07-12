import { configureStore } from "@reduxjs/toolkit";
import initiativesReducer from '../reducers/initiativesSlice'
import groupsReducer from '../reducers/groupsSlice'
import usersReducer from '../reducers/usersSlice'
import communitiesReducer from '../reducers/communitiesSlice'
import {fetchInitiatives} from '../reducers/initiativesSlice'
import {fetchGroups} from '../reducers/groupsSlice'
import {fetchUsers} from '../reducers/usersSlice'
import {fetchCommunities} from '../reducers/communitiesSlice'




export const store = configureStore({
  reducer: {
    initiatives: initiativesReducer,
    groups: groupsReducer,
    users: usersReducer,
    communities: communitiesReducer,  }
});

/*
store.dispatch(fetchCommunities());
store.dispatch(fetchGroups());
store.dispatch(fetchInitiatives());
store.dispatch(fetchUsers());
*/