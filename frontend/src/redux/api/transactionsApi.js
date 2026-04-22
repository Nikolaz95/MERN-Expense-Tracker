import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const transactionsApi = createApi({
    reducerPath: "transactionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["TransactionsList"],
    endpoints: (builder) => ({

        getTransactionsList: builder.query({
            query: () => "/visitlist/me",
            providesTags: ["VisitList"],
        }),

    })
})

export const { useGetTransactionsListQuery } = transactionsApi;