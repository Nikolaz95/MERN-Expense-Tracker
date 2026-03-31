import React from 'react'
import RecentTransactionHistoryContent from '../layouts/recentTransactionHistoryContent'
import PieChartContent from '../layouts/PieChartContent'

import styled from "styled-components";


const UserDashBoardMiddleContent = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    background-color: beige;
    height: 435px;

@media (max-width: 1000px) {

    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    background-color: beige;
    height: 800px;
    
}

`;

const DashboardMidlleSection = () => {
    return (
        <UserDashBoardMiddleContent>

            <RecentTransactionHistoryContent />
            <PieChartContent />


        </UserDashBoardMiddleContent>
    )
}

export default DashboardMidlleSection
