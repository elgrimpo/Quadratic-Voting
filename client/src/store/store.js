import { configureStore } from "@reduxjs/toolkit";
import initiativesReducer from './initiatives/initiativesSlice'
import groupsReducer from './groups/groupsSlice'
import usersReducer from './users/usersSlice'
import communitiesReducer from './communities/communitiesSlice'
import channelsReducer from './channels/channelsSlice'



export default configureStore({
  reducer: {
    initiatives: initiativesReducer,
    groups: groupsReducer,
    users: usersReducer,
    communities: communitiesReducer,
    channels: channelsReducer,
  }
});
