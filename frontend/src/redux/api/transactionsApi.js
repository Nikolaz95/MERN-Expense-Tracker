import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const transactionsApi = createApi({
    reducerPath: "transactionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["Transactions", "Transaction"],
    endpoints: (builder) => ({

        /* get all transactions of users */
        getUserTransactionsList: builder.query({
            query: () => "/transaction/me",
        }),

    })
})

export const { useGetUserTransactionsListQuery } = transactionsApi;