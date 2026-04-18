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
import useTransactionModal from '../../../../../hooks/useModal'
import { useCurrency } from '../../../../../context/CurrencyContext/CurrencyContext'
const RecentTransactionHistoryContent = () => {
    const { convert, currency } = useCurrency();

    const allColumns = transactionColumns(null, null, convert, currency); // ← null jer nema modala

    const dashboardColumns = allColumns.filter(col =>
        ["recipient", "category", "amount"].includes(col.field)
    );

    const recentTransactionsData = [...transitionData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))

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
                    data={recentTransactionsData}
                    columns={dashboardColumns} />
            </section>
        </RecentTransactionArticle>
    )
}

export default RecentTransactionHistoryContent
