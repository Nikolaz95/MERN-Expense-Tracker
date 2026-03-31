import React from 'react'
import PieChart from '../../../../../layouts/Chart/PieChart'
import styled from "styled-components";


const PieChartMainSection = styled.article`
display: flex;
    justify-content: center;

@media (max-width: 768px) {
    
}

`;

const PieChartContent = () => {
    return (
        <PieChartMainSection>
            <PieChart
                income={110}
                expenses={20}
                title="Financial Overview"
            />
        </PieChartMainSection>
    )
}

export default PieChartContent
