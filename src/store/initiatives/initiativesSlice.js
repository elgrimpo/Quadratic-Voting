import { createSlice } from "@reduxjs/toolkit";
import { initiativeList } from "./initiativesData";
import { selectCurrentGroup } from "../groups/groupsSlice.js";

const initialInitiatives = initiativeList;

/*-------- Slice object ---------- */
const initiativesSlice = createSlice({
  name: "initiatives",
  initialState: initialInitiatives,
  reducers: {
    setCurrentInitiative: (state, action) => {
      state.map((initiative) => {
        if (initiative.id === action.payload) {
          initiative.current = true;
        } else {
          initiative.current = false;
        }
      });
    },
    removeCurrentInitiativeSelection: (state) => {
        state.map((initiative) => {
            initiative.current = false
        })
    },
    createInitiative: (state, action) => {
      const newInitiative = action.payload;
      newInitiative.id = state.length
        state.push(newInitiative);
    },
  },
});

/*-------- Selectors ---------- */
export const selectGroupInitiatives = (state) => {
  const currentGroup = selectCurrentGroup(state);
  return state.initiatives.filter(
    (initiative) => initiative.groupID === currentGroup.id
  );
};

export const selectCurrentInitiative = (state) =>
  state.initiatives.find((initiative) => initiative.current === true);

/*-------- Exports ---------- */

export const { setCurrentInitiative, removeCurrentInitiativeSelection, createInitiative } =
  initiativesSlice.actions;

export default initiativesSlice.reducer;
