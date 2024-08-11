import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import aiReducer from './aiSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        GPT: aiReducer
    }

})