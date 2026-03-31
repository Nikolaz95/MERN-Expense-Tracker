import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import ChartFilterButtons from './layouts/ChartFilterButtons';
import styled from "styled-components";



const GrupedBarChartSection = styled.section`
        display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 5px;
    width: 100%;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;

@media (max-width: 768px) {
    
}

`;

const GrupedBarChartTopContent = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

@media (max-width: 425px) {
    justify-content: center;
}

`;

const GrupedBarChartMainContentVisual = styled.section`
       height: 300px;
    position: relative;

@media (max-width: 425px) {
}

`;

const GrupedBarChartTopText = styled.h3`
    font-size: 20px;

@media (max-width: 425px) {
}

`;

const periods = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
];


const GrupedBarChart = ({ dataStore, title = "Financial Overview" }) => {
    const [period, setPeriod] = useState('daily');
    const currentData = dataStore[period];

    const datasets = [
        {
            label: 'Profit',
            data: currentData.income.map((inc, i) => inc - Math.abs(currentData.expenses[i])),
            backgroundColor: '#60a5fa',
            stack: 'Stack 0',
            borderRadius: { topLeft: 4, topRight: 4 },
        },
        {
            label: 'Income',
            data: currentData.income,
            backgroundColor: '#49e023',
            stack: 'Stack 0',
        },
        {
            label: 'Expenses',
            data: currentData.expenses.map(val => -Math.abs(val)),
            backgroundColor: '#f87171',
            stack: 'Stack 0',
            borderRadius: { bottomLeft: 4, bottomRight: 4 },
        },
    ];

    return (
        <GrupedBarChartSection>
            {/* Top sekcija (zamenjuje ChartCardTopSection) */}
            <GrupedBarChartTopContent>
                <GrupedBarChartTopText>{title}</GrupedBarChartTopText>

                {/* Filter dugmići */}
                <ChartFilterButtons
                    periods={periods}
                    period={period}
                    setPeriod={setPeriod}
                    themeColor="#4ade80"
                />
            </GrupedBarChartTopContent>

            {/* Srednja sekcija za grafikon (zamenjuje MainChartInfoSection) */}
            <GrupedBarChartMainContentVisual>
                <Bar
                    data={{ labels: currentData.labels, datasets }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'top', labels: { usePointStyle: true } }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    callback: (value) => value < 0 ? `-$${Math.abs(value)}` : `$${value}`
                                }
                            }
                        }
                    }}
                />
            </GrupedBarChartMainContentVisual>
        </GrupedBarChartSection>
    )
}

export default GrupedBarChart
