import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import blogReducer from "../slice/blogSlice";
import cartReducer from "../slice/cartSlice";
import authReducer, { authApi } from "../slice/authSlice";
import { blogApi } from '../slice/blogSlice';
import { cartApi } from '../slice/cartSlice';


export default combineReducers({
    // Add the generated reducer as a specific top-level slice
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    counter: counterReducer,
    blog: blogReducer,
    auth: authReducer,
    cart: cartReducer

})