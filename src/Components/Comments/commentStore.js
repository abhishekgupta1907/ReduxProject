import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentsSlice";

export const commentStore = configureStore({
    reducer: {
        comments: commentReducer,
    },
});
