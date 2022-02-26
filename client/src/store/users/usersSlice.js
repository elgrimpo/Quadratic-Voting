import {createSlice} from '@reduxjs/toolkit'
import {userList} from './usersData'

const initialUsers = userList


/*-------- Slice object ---------- */
const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsers,
    reducers: {
        
    }
})

/*-------- Selectors ---------- */
export const selectUsers = (state) => state.users
export const selectCurrentUser = (state) => state.users.find(user => user.id === 3)

/*-------- Exports ---------- */


export default usersSlice.reducer