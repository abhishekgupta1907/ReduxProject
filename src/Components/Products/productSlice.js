import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts from the API
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response.data);
    return response.data;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        clearPosts: (state) => {
            // Corrected action name
            state.products = [];
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearPosts } = productSlice.actions;
export default productSlice.reducer;
