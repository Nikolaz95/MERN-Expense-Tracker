import { configureStore } from '@reduxjs/toolkit'
import { transactionsApi } from './api/transactionsApi';
import { authApi } from './api/authApi';



export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [transactionsApi.reducerPath]: transactionsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authApi.middleware,
            transactionsApi.middleware,
        ]),

});