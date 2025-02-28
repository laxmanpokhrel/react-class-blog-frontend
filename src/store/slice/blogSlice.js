import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get('http://localhost:3000/blog')
    return response.data.result
})

export const retrieveBlog = createAsyncThunk('blogs/retrieveBlog', async (blogSlug) => {
    const response = await axios.get(`http://localhost:3000/blog/${blogSlug}`)
    return response.data.result
})

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (build) => ({
        getBlogByName: build.query({
            query: (blogSlug) => `blog/${blogSlug}`,
        }),
    }),
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogByNameQuery } = blogApi

