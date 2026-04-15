import { useState } from 'react';


import titleName from '../../../../hooks/useTitle';
//import css
import "./UserDashBoardPage.css";
import styled from "styled-components";


const SectionUserDashBoard = styled.section`
    display: flex;
    flex-direction: column;
gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;

@media (max-width: 768px) {
    
}

`;

// import components
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout';
import { DashBoardTitleIcon } from '../../../../../assets/IconTitle';

// import data
import GrupedBarChart from '../../../../layouts/Chart/GrupedBarChart';

import DashboardTop from './components/DashboardTop';
import DashboardMidlleSection from './components/DashboardMidlleSection';

const UserDashBoardPage = () => {
    titleName('User DashBoard Page', DashBoardTitleIcon);
    const dashboardDataStore = {
        daily: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            income: [100, 200, 150, 300, 250, 400, 350],
            expenses: [80, 120, 100, 150, 110, 200, 150]
        },
        weekly: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            income: [1200, 1500, 1100, 1800],
            expenses: [800, 900, 700, 1000]
        },
        monthly: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            income: [4200, 4500, 3900, 5200, 4800, 5500, 10000],
            expenses: [2100, 2300, 2000, 2800, 2500, 2700, 1000]
        },
        yearly: {
            labels: ['2023', '2024', '2025', '2026'],
            income: [5000, 2000, 9000, 8000],
            expenses: [3000, 2000, 1000, 5000]
        }
    };

    return (
        <>
            <UserExpenseLayout icon={DashBoardTitleIcon}>
                <SectionUserDashBoard>
                    <DashboardTop />
                    <DashboardMidlleSection />
                    <GrupedBarChart dataStore={dashboardDataStore} />
                </SectionUserDashBoard>
            </UserExpenseLayout>
        </>
    )
}

export default UserDashBoardPage