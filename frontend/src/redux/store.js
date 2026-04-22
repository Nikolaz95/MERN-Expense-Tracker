import { configureStore } from '@reduxjs/toolkit'
import { transactionsApi } from './api/transactionsApi';
import { authApi } from './api/authApi';
import { userApi } from './api/userApi';
import useReducer from "./features/userSlice"


export const store = configureStore({
    reducer: {
        auth: useReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [transactionsApi.reducerPath]: transactionsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authApi.middleware,
            userApi.middleware,
            transactionsApi.middleware,
        ]),

});