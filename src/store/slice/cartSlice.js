import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (build) => ({
        getCartDetailByName: build.query({
            query: (blogSlug) => `blog/${blogSlug}`,
        }),
    }),
})


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action
            if (!state.products.includes(payload)) {
                state.products.push(payload)
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
export const { useGetCartDetailByNameQuery } = cartApi
