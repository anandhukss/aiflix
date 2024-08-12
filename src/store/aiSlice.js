import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    aiRecommendation: false,
    aiMessage: null,
    aiError: null,
    searchResults: null
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
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        },

        reset: (state) => {
            state.aiError = null;
            state.aiMessage = null;
            state.searchResults = null
        }

    }
})


export const { setAiRecommendation, setAiMessage, reset, setSearchResults } = aiSlice.actions
export default aiSlice.reducer