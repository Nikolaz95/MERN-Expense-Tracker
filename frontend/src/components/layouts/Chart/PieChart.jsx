import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartWrapper from './layouts/ChartWrapper';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ income, expenses, title = "Financial Overview" }) => {
    const profit = income - Math.abs(expenses);
    const totalBalance = income - Math.abs(expenses);

    const data = {
        labels: ['Expenses', 'Income', 'Profit'],
        datasets: [{
            data: [Math.abs(expenses), income, profit > 0 ? profit : 0],
            backgroundColor: ['#f87171', '#34c317', '#60a5fa'],
            hoverBackgroundColor: ['#ef4444', '#21790f', '#3b82f6'],
            borderWidth: 1,
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { usePointStyle: true, padding: 20 }
            },
            tooltip: {
                callbacks: {
                    label: (context) => ` ${context.label}: $${context.raw.toLocaleString()}`
                }
            }
        },
    };


    return (
        <ChartWrapper title={title}>
            <Pie data={data} options={options} />
            <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'center' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Total Balance</span>
                <h3 style={{
                    fontSize: '24px',
                    margin: '5px 0 0 0',
                    color: totalBalance > 0 ? '#34c317' : totalBalance < 0 ? '#f87171' : '#9d9ea5'
                }}>
                    ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </h3>
            </div>
        </ChartWrapper>
    )
}

export default PieChart
