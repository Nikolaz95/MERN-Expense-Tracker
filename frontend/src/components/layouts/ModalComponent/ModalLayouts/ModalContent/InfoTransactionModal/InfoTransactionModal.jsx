import React from 'react'
import styled from "styled-components"
import { useCurrency } from '../../../../../context/CurrencyContext/CurrencyContext';
import { formatNumber } from '../../../../../utils/formatNumber';


const CustomModalSection = styled.section`
display: flex;
    flex-direction: column;
    gap: 10px;
`;


const UpdateAccountModalContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const AmountInfo = styled.p`
    color: ${({ $isNegative }) => $isNegative ? "red" : "green"};
    font-weight: bold;
`;

const InfoTransactionModal = ({ transaction, onClose }) => {
    const { convert, currency } = useCurrency();
    return (
        <CustomModalSection>
            <UpdateAccountModalContent>
                <h2>Recipient</h2>
                <p>{transaction.recipient}</p>
                <h2>Category</h2>
                <p>{transaction.category}</p>
                <h2>Transaction Date</h2>
                <p>{transaction.date}</p>
                <h2>Amount</h2>
                <AmountInfo $isNegative={transaction.amount < 0}>
                    {currency?.symbol} {formatNumber(convert(transaction.amount))}
                </AmountInfo>
            </UpdateAccountModalContent>
        </CustomModalSection>
    )
}

export default InfoTransactionModal