import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts from the API
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
    );
    return response.data;
});

const commentSlice = createSlice({
    name: "posts",
    initialState: {
        comments: [],
        status: "idle", // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {
        clearPosts: (state) => {
            // Corrected action name
            state.comments = [];
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
                state.comments = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearPosts } = commentSlice.actions;
export default commentSlice.reducer;
