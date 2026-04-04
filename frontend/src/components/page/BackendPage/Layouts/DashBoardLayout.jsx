import React from 'react'

import styled from "styled-components";
import DashboardSidebar from './DashboardSidebar';

const AdminDashBoardSection = styled.section`
    height: 86.7vh;
`;

const AdminDashBoardMainContent = styled.main`
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 10px;
`;

const AdminDashBoardUsersContent = styled.main`
    width: 100%;
    height: 100%;
    /* padding: 20px; */
    border: 1px solid;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
`;


const DashBoardLayout = ({ children }) => {
    return (
        <AdminDashBoardSection>
            <AdminDashBoardMainContent>
                <DashboardSidebar />
                <AdminDashBoardUsersContent>
                    {children}
                </AdminDashBoardUsersContent>
            </AdminDashBoardMainContent>
        </AdminDashBoardSection>
    )
}

export default DashBoardLayout
