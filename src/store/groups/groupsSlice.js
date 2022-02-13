import {createSlice} from '@reduxjs/toolkit'
import {groupList} from './groupsData'

const initialGroups = groupList

/*-------- Slice object ---------- */
const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialGroups,
    reducers: {
        setCurrentGroup: (state, action) => {
            state.map(group => {
                if (group.id === action.payload) {
                    group.current = true
                } else {
                    group.current = false
                }
            })
        },
    }
})

/*-------- Selectors ---------- */
export const selectGroups = (state) => state.groups
export const selectCurrentGroup = (state) => state.groups.find((group) => group.current === true)

/*-------- Exports ---------- */

export const {setCurrentGroup} = groupsSlice.actions

export default groupsSlice.reducer