import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    /* keepUnusedDataFor: 30, */
    endpoints: (builder) => ({

        /* register part */
        register: builder.mutation({
            query(body) {
                return {
                    url: "/register",
                    method: "POST",
                    body,
                };
            },

        }),


        /* LogIn part */
        login: builder.mutation({
            query(body) {
                return {
                    url: "/login",
                    method: "POST",
                    body,
                };
            },

        })

    })
})


export const { useLoginMutation, useRegisterMutation } = authApi;