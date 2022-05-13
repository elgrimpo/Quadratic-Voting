import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as api from "../api";

const initialCommunities = {
    status: null,
    list: [],
    currentCommunity: {}
  };

  export const fetchCommunities = createAsyncThunk(
    'communities/getCommunities',
    async (subscriptions) => {
      const response = await api.fetchCommunities(subscriptions)
      return response.data
    }
  )

  export const createCommunity = createAsyncThunk(
    'communities/createCommunity',
    async (community, thunkAPI) => {
      try {
        const response = await api.createCommunity(community)
        return response.data
      } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  )

  export const updateCommunity = createAsyncThunk(
    "communities/updateCommunity",
    async (community, thunkAPI) => {
      try {
        const response = await api.updateCommunity(community);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const deleteCommunity = createAsyncThunk(
    "communities/deleteCommunity",
    async (community, thunkAPI) => {
      try {
        const response = await api.deleteCommunity(community);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


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
          state.currentCommunity = action.payload[0]
          state.status = 'success'
        },
        [fetchCommunities.rejected]: (state, payload) => {
          state.status = 'failed'
        },
        [createCommunity.pending]: (state, action) => {
          state.status = 'loading'
        },
        [createCommunity.fulfilled]: (state, action) => {
          state.list.push(action.payload)
          state.status = 'success'
        },
        [createCommunity.rejected]: (state, payload) => {
          state.status = 'failed'
        },
        [updateCommunity.pending]: (state, action) => {
          state.status = "loading";
        },
        [updateCommunity.fulfilled]: (state, action) => {
          const index = state.list.findIndex(
            (community) => community._id === action.payload._id
          );
          state.list[index] = action.payload;
          state.status = "success";
        },
        [updateCommunity.rejected]: (state, payload) => {
          state.status = "failed";
        },
        [deleteCommunity.pending]: (state, action) => {
          state.status = "loading";
        },
        [deleteCommunity.fulfilled]: (state, action) => {
          state.list = state.list.filter((community) => {
            return community._id !== action.payload;
          });
          state.status = "success";
        },
        [deleteCommunity.rejected]: (state, payload) => {
          state.status = "failed";
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