import React from 'react'
import PieChart from '../../../../../layouts/Chart/PieChart'
import styled from "styled-components";
import { useTransaction } from '../../../../../context/TransactionContext/TransactionContext';


const PieChartMainSection = styled.article`
display: flex;
    justify-content: center;

@media (max-width: 768px) {
    
}

`;

const PieChartContent = () => {
    return (
        <PieChartMainSection>
            <PieChart title="Financial Overview" />
        </PieChartMainSection>
    )
}

export default PieChartContent
