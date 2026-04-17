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

const InfoTransactionModal = () => {
    return (
        <CustomModalSection>
            <UpdateAccountModalContent>
                <h2>Recipient</h2>
                <p>Tech Solutions Inc</p>
                <h2>Category</h2>
                <p>salary</p>
                <h2>Transaction Date</h2>
                <p>Feb 1, 2026</p>
                <h2>Amount</h2>
                <p>€4200</p>
            </UpdateAccountModalContent>
        </CustomModalSection>
    )
}

export default InfoTransactionModal