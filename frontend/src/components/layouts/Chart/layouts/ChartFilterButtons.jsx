import React from 'react'
import Button from '../../Buttons/Button';
import styled from "styled-components";


const FilterBtnSection = styled.section`
    display: flex;
`;

const ChartFilterButtons = ({ periods, period, setPeriod, themeColor }) => {
    return (
        <FilterBtnSection style={{ "--theme-color": themeColor }}>
            {periods.map((p) => (
                <Button
                    key={p.value} a
                    onClick={() => setPeriod(p.value)}
                    active={period === p.value}
                    variant="chartFilterBtn"
                >
                    {p.label}
                </Button>
            ))}
        </FilterBtnSection>
    )
}

export default ChartFilterButtons
