import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get('http://localhost:3000/blog')
    return response.data.result
})

export const retrieveBlog = createAsyncThunk('blogs/retrieveBlog', async (blogSlug) => {
    const response = await axios.get(`http://localhost:3000/blog/${blogSlug}`)
    return response.data.result
})

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        status: "idle",
        retrieveBlogStatus: 'idle',
        retrieveBlogDetail: null
    },
    reducers: {
        resetBlog: (state) => { state.blogs = [] }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.blogs = action.payload
                state.status = 'idle'
            }).addCase(retrieveBlog.pending, (state) => {
                state.retrieveBlogStatus = "pending"
            }).addCase(retrieveBlog.fulfilled, (state, action) => {
                state.retrieveBlogStatus = "fulfilled";
                state.retrieveBlogDetail = action.payload
            }).addCase(retrieveBlog.rejected, (state) => {
                state.retrieveBlogStatus = "rejected";
            })
    }
})

// Action creators are generated for each case reducer function
export const { resetBlog } = blogSlice.actions

export default blogSlice.reducer