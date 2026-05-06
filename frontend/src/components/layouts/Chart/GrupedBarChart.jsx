import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';
import ChartFilterButtons from './layouts/ChartFilterButtons';
import styled from "styled-components";
import { useCurrency } from '../../context/CurrencyContext/CurrencyContext';
import { formatNumber } from '../../utils/formatNumber';



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
    const { convert, currency } = useCurrency();
    // ← provjeri da li dataStore i currentData postoje
    if (!dataStore || !dataStore[period]) {
        return <p>No data available</p>;
    }

    const currentData = dataStore[period];

    // ← provjeri da li ima podataka
    const hasData = currentData.labels?.length > 0;
    if (!hasData) {
        return <p>No transactions found for this period</p>;
    }

    const datasets = [
        {
            label: 'Income',
            data: currentData.income,
            backgroundColor: '#49e023',
            stack: 'Stack 0',
        },
        {
            label: 'Expenses',
            data: currentData.expenses,
            backgroundColor: '#f87171',
            stack: 'Stack 0',
        },
        {
            label: 'Profit',
            data: currentData.income.map((inc, i) => {
                const balance = inc + currentData.expenses[i]; // expenses su negativni
                return balance > 0 ? balance : 0;
            }),
            backgroundColor: '#60a5fa',
            stack: 'Stack 0', // ← DRUGI stack, ne zbrajaj sa income/expenses
        },
        {
            label: 'Loss',
            data: currentData.income.map((inc, i) => {
                const balance = inc + currentData.expenses[i];
                return balance < 0 ? balance : 0;
            }),
            backgroundColor: '#f97316',
            stack: 'Stack 0', // ← DRUGI stack
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
                            legend: { position: 'top', labels: { usePointStyle: true } },
                            tooltip: {
                                callbacks: {
                                    label: (context) => {
                                        const value = context.raw;
                                        if (value === 0) return null; // ← ne prikazuj 0 vrijednosti
                                        const sign = value < 0 ? '-' : '';
                                        return ` ${context.dataset.label}: ${sign}${currency?.symbol} ${formatNumber(convert(Math.abs(value)))}`;
                                    }
                                }
                            },
                        },
                        scales: {
                            y: {
                                ticks: {
                                    // ← currency?.symbol umjesto hardkodiranog $
                                    callback: (value) => value < 0
                                        ? `  ${currency?.symbol} ${convert(Math.abs(value))}`
                                        : `${currency?.symbol} ${convert(value)}`
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
