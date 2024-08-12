import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    aiRecommendation: false,
    aiMessage: null,
    aiError: null,
}

export const aiSlice = createSlice({
    initialState,
    name: 'Ai',
    reducers: {
        setAiRecommendation: (state, action) => {
            state.aiRecommendation = action.payload
        },
        setAiMessage: (state, action) => {
            const movieArray = action?.payload?.split(',').map(movie => movie.trim()) || [];
            if (movieArray && Array.isArray(movieArray) && movieArray.length >= 5) {
                state.aiMessage = movieArray
            } else {
                state.aiError = action.payload || `I'm sorry, but I'm having trouble with this right now.`
            }
        },
        reset: (state) => {
            state.aiError = null;
            state.aiMessage = null
        }

    }
})


export const { setAiRecommendation, setAiMessage, reset } = aiSlice.actions
export default aiSlice.reducer