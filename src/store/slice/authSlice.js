import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk("auth/loginUser", async (payload) => {
    console.log("🚀 ~ loginUser ~ payload:", payload)
    const response = await axios.post('http://localhost:3000/login', payload)
    return response.data
})


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
    },

    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true
                localStorage.setItem('token', action.payload.token);

            })
            .addCase(loginUser.rejected, () => {
                // Display notification
                console.log("Cannot login user!")
            })
    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer