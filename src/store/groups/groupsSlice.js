import {createSlice} from '@reduxjs/toolkit'
import {groupList} from './groupsData'
import {selectInitiatives} from '../initiatives/initiativesSlice'

const initialGroups = groupList

/*-------- Slice object ---------- */
const groupsSlice = createSlice({
    name: 'groups',
    initialState: initialGroups,
    reducers: {
        setCurrentGroup: (state, action) => {
            state.map(group => {
                if (group.id === action.payload) {
                    return group.current = true
                } else {
                    return group.current = false
                }
            })
        },
        updateVoteCredits: (state, action) => {
            const index = state.findIndex((obj => obj.id === action.payload.id));
            const array = action.payload.array;
            const poweredArray = array.map(vote => Math.pow(vote,2));
            state[index].remainingVotes =state[index].totalVotes - poweredArray.reduce((partialSum, a) => partialSum + a, 0)
         
 
        }
    }
})

/*-------- Selectors ---------- */
export const selectGroups = (state) => state.groups
export const selectCurrentGroup = (state) => state.groups.find((group) => group.current === true)

/*-------- Exports ---------- */

export const {setCurrentGroup, updateVoteCredits} = groupsSlice.actions

export default groupsSlice.reducer