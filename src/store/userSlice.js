import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

export const userSlice = createSlice({
    initialState,
    name: 'User',
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload
        },
        removeUser: (state) => {
            state.currentUser = null
        }

    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer