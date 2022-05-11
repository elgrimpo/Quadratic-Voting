import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as api from "../api";

const initialUsers = {
    status: null,
    list: [],
    isLoggedIn: false, 
    currentUser: {
      userName: "Guest",
      subscriptions: [{
        communityId: "622058d622194df2d949a38c"
      }]
    }
  };

export const fetchUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
      const response = await api.fetchUsers()
      return response.data
    }
  )

  export const fetchCurrentUser = createAsyncThunk(
    'users/getCurrentUser',
    async () => {
      const response = await api.fetchCurrentUser()
      return response.data.user
    }
  )

  export const logout = createAsyncThunk(
    'users/logout',
    async () => {
      const response = await api.logout()
      return response
    }
  )

  export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (user, thunkAPI) => {
      try {
        const response = await api.updateInitiative(user);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


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
        [fetchCurrentUser.fulfilled]: (state, action) => {
          state.currentUser = action.payload
          state.status = 'success'
          state.isLoggedIn = true
        },
        [logout.fulfilled]: (state, action) => {
          state.currentUser = []
          state.status = 'success'
          state.isLoggedIn = false
        },
        [updateUser.pending]: (state, action) => {
          state.status = "loading";
        },
        [updateUser.fulfilled]: (state, action) => {
          const index = state.list.findIndex(
            (user) => user._id === action.payload._id
          );
          state.list[index] = action.payload;
          state.status = "success";
        },
        [updateUser.rejected]: (state, payload) => {
          state.status = "failed";
        },
    }
})

/*-------- Selectors ---------- */
export const selectUsers = (state) => state.users.list
export const selectCurrentUser = (state) => state.users.currentUser

export const selectIsLoggedIn = (state) => state.users.isLoggedIn

export const selectUserLoadingStatus = (state) => state.users.status 

/*-------- Exports ---------- */


export default usersSlice.reducer