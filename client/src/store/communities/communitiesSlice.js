import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {communityList} from './communitiesData'
import * as api from "../../api";

const initialCommunities = {
    status: null,
    list: []
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
export const selectCurrentCommunity = (state) => state.communities.list.find((community) => community.current === true)

export const selectCommunityLoadingStatus = (state) => state.communities.status 

/*-------- Exports ---------- */


export default communitiesSlice.reducer