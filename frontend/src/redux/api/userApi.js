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

    })
})



export const { useGetMeQuery, useUpdateProfileMutation,
    useUploadAvatarMutation, useUpdatePasswordMutation } = userApi;