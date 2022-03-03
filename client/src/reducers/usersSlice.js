import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as api from "../api";

const initialUsers = {
    status: null,
    list: []
  };

export const fetchUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
      const response = await api.fetchUsers()
      return response.data
    }
  )


/*-------- Slice object ---------- */
const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsers,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
          state.list = action.payload
          state.status = 'success'
        },
        [fetchUsers.rejected]: (state, payload) => {
          state.status = 'failed'
        },
    }
})

/*-------- Selectors ---------- */
export const selectUsers = (state) => state.users.list
export const selectCurrentUser = (state) => state.users.list.find(user => user._id === '622044679ca9947c1ac22ee4') //PLACEHOLDER

export const selectUserLoadingStatus = (state) => state.users.status 

/*-------- Exports ---------- */


export default usersSlice.reducer