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
import { useTransaction } from '../../../../context/TransactionContext/TransactionContext';

const UserDashBoardPage = () => {
    titleName('User DashBoard Page', DashBoardTitleIcon);
    const { dashboardDataStore } = useTransaction();

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