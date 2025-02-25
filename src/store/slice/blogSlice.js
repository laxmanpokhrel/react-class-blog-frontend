import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get('http://localhost:3000/blog')
    return response.data.result
})

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        status: "idle"
    },
    reducers: {
        resetBlog: (state) => { state.blogs = [] }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.blogs = action.payload
                // state.status = 'idle'
            })
    }
})

// Action creators are generated for each case reducer function
export const { resetBlog } = blogSlice.actions

export default blogSlice.reducer