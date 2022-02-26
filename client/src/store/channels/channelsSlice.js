import {createSlice} from '@reduxjs/toolkit'
import {channelList} from './channelsData'

const initialChannels = channelList;

/*-------- Slice object ---------- */
const channelsSlice = createSlice({
    name: 'channels',
    initialState: initialChannels,
    reducers: {
        
    }
});

/*-------- Selectors ---------- */
export const selectChannels = (state) => state.channels;
export const selectCurrentChannel = (state) =>
  state.channels.find((channel) => channel.current === true);


/*-------- Exports ---------- */
export default channelsSlice.reducer