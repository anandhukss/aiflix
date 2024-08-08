import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingList: null,
    videoList: null
}

export const movieSlice = createSlice({
    initialState,
    name: 'Movies',
    reducers: {
        setNowPlayingList: (state, action) => {
            state.nowPlayingList = action.payload
        },

        setVideoList: (state, action) => {
            state.videoList = action.payload
        },

    }
})


export const { setNowPlayingList ,setVideoList} = movieSlice.actions
export default movieSlice.reducer