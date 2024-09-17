import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./productSlice";

export const productStore = configureStore({
    reducer: {
        products: postsReducer,
    },
});
