import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const transactionsApi = createApi({
    reducerPath: "transactionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["Transactions", "Transaction"],
    endpoints: (builder) => ({

        /* get all transactions of users */
        getUserTransactionsList: builder.query({
            query: () => "/transaction/me",

            providesTags: ["Transactions"],
        }),


        //  create transaction
        createTransaction: builder.mutation({
            query(body) {
                return {
                    url: "/transaction/add",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["Transactions"], // ← automatski refetch liste
        }),


        //  delete transaction

        deleteTransaction: builder.mutation({
            query(id) {
                return {
                    url: `/transaction/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["Transactions"], // ← automatski refetch liste
        }),

    })
})

export const { useGetUserTransactionsListQuery,
    useCreateTransactionMutation,
    useDeleteTransactionMutation
} = transactionsApi;