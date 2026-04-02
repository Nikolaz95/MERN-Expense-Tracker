import React from 'react'

export const UserRoutes = [
    {
        path: "/user/settings-Profile",
        element:
            <ProtectRoute>
                <UserProfileInfo />
            </ProtectRoute>
    },
]