import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import blogReducer from "../slice/blogSlice";
import authReducer from "../slice/authSlice";

export default combineReducers({
    counter: counterReducer,
    blog: blogReducer,
    auth: authReducer
})