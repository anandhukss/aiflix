import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingList: null,
    videoList: null,
    popularList: null,
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

        setPopularList: (state, action) => {
            state.popularList = action.payload
        },

    }
})


export const { setNowPlayingList, setVideoList, setPopularList } = movieSlice.actions
export default movieSlice.reducer