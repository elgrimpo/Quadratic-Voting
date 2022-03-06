import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {selectInitiatives} from './initiativesSlice'
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
  
  // Frontend NOT YET IMPLEMENTED
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

/*-------- Slice object ---------- */
const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialGroups,
    reducers: {
        updateVoteCredits: (state, action) => {
            const index = state.list.findIndex((obj => obj._id === action.payload.id));
            const usedVotes = action.payload.usedVotes;
            state.list[index].remainingVotes =state.list[index].totalVotes - usedVotes
        }
    },
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
    }
})

/*-------- Selectors ---------- */
export const selectGroups = (state) => state.groups.list
export const selectGroupLoadingStatus = (state) => state.groups.status 


/*-------- Exports ---------- */

export const {setCurrentGroup, updateVoteCredits} = groupsSlice.actions

export default groupsSlice.reducer