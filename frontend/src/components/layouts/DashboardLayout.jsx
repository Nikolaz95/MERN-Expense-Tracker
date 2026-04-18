import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalModals from '../context/modals/GlobalModals'

const DashboardLayout = () => {
    return (
        <>
            <Outlet />
            <GlobalModals />
        </>
    )
}

export default DashboardLayout