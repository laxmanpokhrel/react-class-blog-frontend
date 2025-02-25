import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slice/counterSlice"
import blogSlice from "./slice/blogSlice"

export default configureStore({
    reducer: {
        counter: counterSlice,
        blog: blogSlice
    },
})