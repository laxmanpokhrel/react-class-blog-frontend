import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import blogReducer from "../slice/blogSlice";
import authReducer, { authApi } from "../slice/authSlice";
import { blogApi } from '../slice/blogSlice';


export default combineReducers({
    // Add the generated reducer as a specific top-level slice
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    counter: counterReducer,
    blog: blogReducer,
    auth: authReducer,

})