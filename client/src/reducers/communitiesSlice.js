import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as api from "../api";

const initialCommunities = {
    status: null,
    list: [],
    currentCommunity: {}
  };

  export const fetchCommunities = createAsyncThunk(
    'communities/getCommunities',
    async () => {
      const response = await api.fetchCommunities()
      return response.data
    }
  )


/*-------- Slice object ---------- */
const communitiesSlice = createSlice({
    name: 'communities',
    initialState: initialCommunities,
    reducers: {
      updateCurrentCommunity: (state, action) => {
        state.currentCommunity = action.payload
      }   
    },
    extraReducers: {
        [fetchCommunities.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchCommunities.fulfilled]: (state, action) => {
          state.list = action.payload
          state.status = 'success'
        },
        [fetchCommunities.rejected]: (state, payload) => {
          state.status = 'failed'
        },
    }
});

/*-------- Selectors ---------- */
export const selectCommunities = (state) => state.communities.list;
export const selectCurrentCommunity = (state) => state.communities.currentCommunity;

export const selectCommunityLoadingStatus = (state) => state.communities.status 
 
/*-------- Exports ---------- */

export const {
  updateCurrentCommunity,
} = communitiesSlice.actions;

export default communitiesSlice.reducer