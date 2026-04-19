import React from 'react'
import styled from "styled-components";
import { useCurrency } from '../../../../../context/CurrencyContext/CurrencyContext';
import transitionData from '../../../../../data/TransactionData';
import { useTransaction } from '../../../../../context/TransactionContext/TransactionContext';
import { formatNumber } from '../../../../../utils/formatNumber';


const UserDashBoardTopSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid black;

    @media  screen and (max-width:1000px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px;
        
    
  }
`;

const UserDashBoardInfo = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
    @media  screen and (max-width:1000px) {
    
  }
`;


const DashBoardTopContent = () => {
    const { convert, currency } = useCurrency();
    const { totalIncome, totalExpense, totalBalance } = useTransaction();

    return (
        <UserDashBoardTopSection>
            <UserDashBoardInfo>
                <h1>Total Balance</h1>
                <p>{currency?.symbol} {formatNumber(convert(totalBalance))}</p>
            </UserDashBoardInfo>
            <UserDashBoardInfo>
                <h1>Total Income</h1>
                <p>{currency?.symbol} {formatNumber(convert(totalIncome))}</p>
            </UserDashBoardInfo>
            <UserDashBoardInfo>
                <h1>Total Expenses</h1>
                <p>{currency?.symbol} {formatNumber(convert(totalExpense))}</p>
            </UserDashBoardInfo>
        </UserDashBoardTopSection>
    )
}

export default DashBoardTopContent
