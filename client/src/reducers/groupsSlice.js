import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as api from "../api";

const initialGroups = {
    status: null,
    list: []
  };
  
  export const fetchGroups = createAsyncThunk(
    'groups/getGroups',
    async () => {
      const response = await api.fetchGroups()
      return response.data
    }
  )
  
  export const createGroup = createAsyncThunk(
    'groups/createGroup',
    async (group, thunkAPI) => {
      try {
        const response = await api.createGroup(group)
        return response.data
      } catch(error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  )

  export const updateGroup = createAsyncThunk(
    "groups/updateGroup",
    async (group, thunkAPI) => {
      try {
        const response = await api.updateGroup(group);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const deleteGroup = createAsyncThunk(
    "group/deleteGroup",
    async (group, thunkAPI) => {
      try {
        const response = await api.deleteGroup(group);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

/*-------- Slice object ---------- */
const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialGroups,
    reducers: {},
    extraReducers: {
        [fetchGroups.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchGroups.fulfilled]: (state, action) => {
          state.list = action.payload
          state.status = 'success'
        },
        [fetchGroups.rejected]: (state, payload) => {
          state.status = 'failed'
        },
        [createGroup.pending]: (state, action) => {
          state.status = 'loading'
        },
        [createGroup.fulfilled]: (state, action) => {
          state.list.push(action.payload)
          state.status = 'success'
        },
        [createGroup.rejected]: (state, payload) => {
          state.status = 'failed'
        },
        [updateGroup.pending]: (state, action) => {
          state.status = "loading";
        },
        [updateGroup.fulfilled]: (state, action) => {
          const index = state.list.findIndex(
            (group) => group._id === action.payload._id
          );
          state.list[index] = action.payload;
          state.status = "success";
        },
        [updateGroup.rejected]: (state, payload) => {
          state.status = "failed";
        },
        [deleteGroup.pending]: (state, action) => {
          state.status = "loading";
        },
        [deleteGroup.fulfilled]: (state, action) => {
          state.list = state.list.filter((group) => {
            return group._id !== action.payload;
          });
          state.status = "success";
        },
        [deleteGroup.rejected]: (state, payload) => {
          state.status = "failed";
        },
    }
})

/*-------- Selectors ---------- */
export const selectGroups = (state) => state.groups.list
export const selectGroupLoadingStatus = (state) => state.groups.status 


/*-------- Exports ---------- */

export const {setCurrentGroup} = groupsSlice.actions

export default groupsSlice.reducer