import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    aiRecommendation: false
}

export const aiSlice = createSlice({
    initialState,
    name: 'Ai',
    reducers: {
        setAiRecommendation: (state, action) => {
            state.aiRecommendation = action.payload
        },



    }
})


export const { setAiRecommendation } = aiSlice.actions
export default aiSlice.reducer