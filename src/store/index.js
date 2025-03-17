import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';

import rootReducer from "./reducer"
import { blogApi } from './slice/blogSlice';
import { cartApi } from './slice/cartSlice';
import { authApi } from './slice/authSlice';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(blogApi.middleware, authApi.middleware, cartApi.middleware),
})

export default persistStore(store);

setupListeners(store.dispatch)

