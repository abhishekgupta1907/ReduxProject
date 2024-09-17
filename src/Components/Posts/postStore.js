import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

export const postStore = configureStore({
    reducer: {
        posts: postsReducer,
    },
});
