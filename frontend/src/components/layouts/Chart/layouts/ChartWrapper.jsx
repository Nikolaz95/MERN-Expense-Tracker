import React from 'react'

import styled from "styled-components";

const ChartCardSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ChartCardTopSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 490px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const MainChartInfoSection = styled.section`
    height: 300px;
`;

const ChartWrapper = ({ title, filters, children }) => {
    return (
        <ChartCardSection>
            <ChartCardTopSection>
                {title && <h3>{title}</h3>}
                {filters && filters}
            </ChartCardTopSection>
            <MainChartInfoSection>
                {children}
            </MainChartInfoSection>
        </ChartCardSection>
    )
}

export default ChartWrapper
