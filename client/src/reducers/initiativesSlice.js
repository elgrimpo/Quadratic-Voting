import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const initialInitiatives = {
  status: null,
  list: [],
};

export const fetchInitiatives = createAsyncThunk(
  "initiatives/getInitiatives",
  async (subscriptions) => {
    const response = await api.fetchInitiatives(subscriptions);
    return response.data;
  }
);

export const createInitiative = createAsyncThunk(
  "initiatives/createInitiative",
  async (initiative, thunkAPI) => {
    try {
      const response = await api.createInitiative(initiative);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateInitiative = createAsyncThunk(
  "initiatives/updateInitiative",
  async (initiative, thunkAPI) => {
    try {
      const response = await api.updateInitiative(initiative);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteInitiative = createAsyncThunk(
  "initiatives/deleteInitiative",
  async (initiative, thunkAPI) => {
    try {
      const response = await api.deleteInitiative(initiative);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*-------- Slice object ---------- */
const initiativesSlice = createSlice({
  name: "initiatives",
  initialState: initialInitiatives,
  reducers: { },
  extraReducers: {
    [fetchInitiatives.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchInitiatives.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [fetchInitiatives.rejected]: (state, payload) => {
      state.status = "failed";
    },
    [createInitiative.pending]: (state, action) => {
      state.status = "loading";
    },
    [createInitiative.fulfilled]: (state, action) => {
      state.list.push(action.payload);
      state.status = "success";
    },
    [createInitiative.rejected]: (state, payload) => {
      state.status = "failed";
    },

    [deleteInitiative.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteInitiative.fulfilled]: (state, action) => {
      state.list = state.list.filter((initiative) => {
        return initiative._id !== action.payload;
      });
      state.status = "success";
    },
    [deleteInitiative.rejected]: (state, payload) => {
      state.status = "failed";
    },

    [updateInitiative.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateInitiative.fulfilled]: (state, action) => {
      const index = state.list.findIndex(
        (initiative) => initiative._id === action.payload._id
      );
      state.list[index] = action.payload;
      state.status = "success";
    },
    [updateInitiative.rejected]: (state, payload) => {
      state.status = "failed";
    },
  },
});

/*-------- Selectors ---------- */
export const selectInitiatives = (state) => state.initiatives.list;

export const selectInitiativeLoadingStatus = (state) =>
  state.initiatives.status;

/*-------- Exports ---------- */

// TODO: Still needed??
export const {
  setCurrentInitiative,
  removeCurrentInitiativeSelection,
} = initiativesSlice.actions;

export default initiativesSlice.reducer;
