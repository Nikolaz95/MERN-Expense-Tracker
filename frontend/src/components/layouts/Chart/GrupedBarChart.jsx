import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';

import ChartWrapper from './layouts/ChartWrapper';
import ChartFilterButtons from './layouts/ChartFilterButtons';

const periods = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
];


const GrupedBarChart = ({ dataStore }) => {
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
        <ChartWrapper
            filters={
                <ChartFilterButtons periods={periods} period={period} setPeriod={setPeriod} themeColor="#4ade80" />
            }>
            <Bar
                data={{ labels: currentData.labels, datasets }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'top' } },
                    scales: {
                        y: {
                            ticks: {
                                callback: (value) => value < 0 ? `-$${Math.abs(value)}` : `$${value}`
                            }
                        }
                    }
                }}
            />
        </ChartWrapper>
    )
}

export default GrupedBarChart
