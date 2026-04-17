import React from 'react'
import styled from "styled-components"


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

const InfoTransactionModal = ({ transaction, onClose }) => {
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
                <p>{transaction.amount}</p>
            </UpdateAccountModalContent>
        </CustomModalSection>
    )
}

export default InfoTransactionModal