import React from 'react'
import Table from '../../../../../layouts/Table/Table'
import Button from '../../../../../layouts/Buttons/Button'
import Navigation from '../../../../../layouts/NavigatioLinkComponent/Navigation'
import { transactionColumns } from '../../../../../layouts/Table/TableColumns/TransactionColumns'

import styled from "styled-components";


const RecentTransactionArticle = styled.article`
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* height: 400px; */
    gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px;

@media (max-width: 768px) {
    
}

`;


const RecentTransactionTop = styled.section`
display: flex;
    flex-direction: row;
    justify-content: space-between;

@media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

`;

// import data
import transitionData from '../../../../../data/TransactionData';
const RecentTransactionHistoryContent = () => {

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

    const dashboardColumns = transactionColumns.filter(col =>
        ["recipient", "category", "amount"].includes(col.field)
    );

    return (
        <RecentTransactionArticle>
            <RecentTransactionTop>
                <h1>Transaction history</h1>
                <Navigation to="/userTransactions">
                    <Button>
                        View All
                    </Button>
                </Navigation>
            </RecentTransactionTop>
            <section className='recentTransactionSection'>
                <Table noDataText="No transactions found for this category yet !"
                    data={transitionData} columns={dashboardColumns} />
            </section>
        </RecentTransactionArticle>
    )
}

export default RecentTransactionHistoryContent
