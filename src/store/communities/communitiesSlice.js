import {createSlice} from '@reduxjs/toolkit'
import {communityList} from './communitiesData'

const initialCommunities = communityList;


/*-------- Slice object ---------- */
const communitiesSlice = createSlice({
    name: 'communities',
    initialState: initialCommunities,
    reducers: {
        
    }
});

/*-------- Selectors ---------- */
export const selectCommunities = (state) => state.communities;
export const selectCurrentCommunity = (state) => state.communities.find((community) => community.current === true)

/*-------- Exports ---------- */


export default communitiesSlice.reducer