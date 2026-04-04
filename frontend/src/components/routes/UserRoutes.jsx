import React from 'react'
import UserProfileInfo from '../page/BackendPage/UserPage/UserProfileInfo/UserProfileInfo'
import UploadPicture from '../page/BackendPage/UserPage/UploadPicture/UploadPicture'
import DeleteAccount from '../page/BackendPage/UserPage/DeleteAccount/DeleteAccount'
import UpdatePassword from '../page/BackendPage/UserPage/UpdatePassword/UpdatePassword'
import UpdateProfile from '../page/BackendPage/UserPage/UpdateProfile/UpdateProfile'

export const UserRoutes = [
    {
        path: "/user/settings-Profile",
        element:

            <UserProfileInfo />
    },

    {
        path: "/user/update-Profile",
        element:
            <UpdateProfile />
    },

    {
        path: "/user/update-Picture",
        element:
            <UploadPicture />
    },

    {
        path: "/user/update-Password",
        element:
            <UpdatePassword />

    },
    {
        path: "/user/delete-Account",
        element:
            <DeleteAccount />
    },
]