import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slice/counterSlice"
import blogSlice from "./slice/blogSlice"
import authSlice from "./slice/authSlice"

export default configureStore({
    reducer: {
        counter: counterSlice,
        blog: blogSlice,
        auth: authSlice
    },
})
