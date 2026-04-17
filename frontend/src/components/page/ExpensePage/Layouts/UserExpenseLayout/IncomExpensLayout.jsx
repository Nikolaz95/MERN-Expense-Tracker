import React, { useState } from 'react'


// import components
import Button from '../../../../layouts/Buttons/Button';
import GenericChart from '../../../../layouts/Chart/GenericChart';
import PaginationComponent from '../../../../layouts/Pagination/PaginationComponent';

// styled css
import styled from "styled-components";
import TransactionTable from '../../../../layouts/Table/TransactionTable';
import Table from '../../../../layouts/Table/Table';
import { transactionColumns } from '../../../../layouts/Table/TableColumns/TransactionColumns';

const IncomExpenseLayout = styled.section`
display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    border: 1px solid;
`;

const IncomExpenseSectionTop = styled.section`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 425px) {
        display: flex;
    flex-direction: column;
    gap: 10px;
    }
`;

const IncomExpenseOverviewSection = styled.section`
padding: 10px;
    border: 1px solid;
`;

const IncomExpenseHistorySection = styled.section`
display: flex;
    border: 1px solid;
    flex-direction: column;
    gap: 20px;
`;

const IncomExpensLayout = ({ titleText, descriptionText, buttonText, openModalAddIncome, chartTitle, dataStore, themeColor, tableTitle, fullData, openModalDeleteTransaction, openModalInfoTransaction }) => {
    const [currentTrans, setCurrentTrans] = useState([]);

    const handleOpenModalInfo = (row) => {
        console.log("INFO TRANSACTION:", row);
        openModalInfoTransaction(row);
    };

    const handleOpenModalDelete = (row) => {
        console.log("DELETE TRANSACTION:", row);
        openModalDeleteTransaction(row);
    };

    const columns = transactionColumns(handleOpenModalInfo, handleOpenModalDelete);
    return (
        <IncomExpenseLayout>
            <IncomExpenseSectionTop>
                <div className='incomSectionTopLeft'>
                    <h1>{titleText}</h1>
                    <p>{descriptionText}</p>
                </div>
                <div className='incomSectionTopLeft'>
                    <Button onClick={openModalAddIncome}>
                        {buttonText}
                    </Button>
                </div>
            </IncomExpenseSectionTop>
            <IncomExpenseOverviewSection>
                {/* SAMO POZOVEŠ GENERIC CHART */}
                {dataStore ? (
                    <GenericChart
                        title={chartTitle}
                        dataStore={dataStore}
                        themeColor={themeColor}
                    />
                ) : (
                    <p>Loading chart data...</p>
                )}
            </IncomExpenseOverviewSection>
            <IncomExpenseHistorySection>
                <h1>{tableTitle}</h1>
                <Table noDataText="No transactions found for this category yet !"
                    data={currentTrans} columns={columns} />
                <PaginationComponent
                    data={fullData}
                    itemsPerPage={10}
                    onPageData={setCurrentTrans}
                />
            </IncomExpenseHistorySection>
        </IncomExpenseLayout>
    )
}

export default IncomExpensLayout
