import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setLoading, setUser } from "../features/userSlice";


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        credentials: "include", // bitno imati
    }),
    tagTypes: ["User", "AdminUsers", "AdminUser"],
    endpoints: (builder) => ({
        /* getme */
        getMe: builder.query({
            query: () => `me`,
            transformResponse: (result) => result.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));
                    dispatch(setIsAuthenticated(true));
                    dispatch(setLoading(false));
                } catch (error) {
                    dispatch(setLoading(false));
                    console.log(error);
                }
            },
            providesTags: ["User"],
        }),

        /* update user profile */
        updateProfile: builder.mutation({
            query(body) {
                return {
                    url: "/me/update",
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),

        /* upload user avatar img */
        uploadAvatar: builder.mutation({
            query(body) {
                return {
                    url: "/me/upload_avatar",
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),

        /* update password */
        updatePassword: builder.mutation({
            query(body) {
                return {
                    url: "/password/update",
                    method: "PUT",
                    body,
                };
            },
        }),


        /* user delete byself account */
        deleteByUserAccount: builder.mutation({
            query: () => ({
                url: "/me/deleteAccount",
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),


        /* Admin Part */


        /* ADMIN- get list of all  users  */
        getAdminAllUsers: builder.query({
            query: () => `/admin/allUsers`,
            providesTags: ["AdminUsers"],
        }),

        /* ADMIN- get users details  */
        getUserDetails: builder.query({
            query: (id) => `/admin/users/${id}`,
            providesTags: ["AdminUser"],
        }),


        /* ADMIN- uptade another users  */

        updateUser: builder.mutation({
            query({ id, body }) {
                return {
                    url: `/admin/users/${id}`,
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["AdminUsers"],
        }),

        /* ADMIN- can delete another profiles  */
        deleteUserByAdmin: builder.mutation({
            query(id) {
                return {
                    url: `/admin/users/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["AdminUsers"],
        }),
    })
})



export const { useGetMeQuery, useUpdateProfileMutation,
    useUploadAvatarMutation, useUpdatePasswordMutation,
    useDeleteByUserAccountMutation, useDeleteUserByAdminMutation,
    useGetAdminAllUsersQuery, useUpdateUserMutation, useGetUserDetailsQuery } = userApi;