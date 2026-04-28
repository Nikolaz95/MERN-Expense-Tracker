import React from 'react'
import UserProfileInfo from '../page/BackendPage/UserPage/UserProfileInfo/UserProfileInfo'
import UploadPicture from '../page/BackendPage/UserPage/UploadPicture/UploadPicture'
import DeleteAccount from '../page/BackendPage/UserPage/DeleteAccount/DeleteAccount'
import UpdatePassword from '../page/BackendPage/UserPage/UpdatePassword/UpdatePassword'
import UpdateProfile from '../page/BackendPage/UserPage/UpdateProfile/UpdateProfile'
import ProtectRoute from './ProtectRoute'

export const UserRoutes = [
    {
        path: "/user/settings-Profile",
        element:
            <ProtectRoute>
                <UserProfileInfo />
            </ProtectRoute>
    },

    {
        path: "/user/update-Profile",
        element:
            <ProtectRoute>
                <UpdateProfile />
            </ProtectRoute>
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