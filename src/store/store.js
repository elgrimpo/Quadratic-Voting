import { configureStore } from "@reduxjs/toolkit";
import initiativesReducer from './initiatives/initiativesSlice'
import groupsReducer from './groups/groupsSlice'


export default configureStore({
  reducer: {
    initiatives: initiativesReducer,
    groups: groupsReducer
  },
});
