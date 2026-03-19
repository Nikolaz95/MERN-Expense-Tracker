import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ income, expenses, title = "Financial Overview" }) => {
    // Računamo profit i balans
    const profit = income - Math.abs(expenses);
    const totalBalance = income - Math.abs(expenses);

    const data = {
        labels: ['Expenses', 'Income', 'Profit'],
        datasets: [
            {
                data: [Math.abs(expenses), income, profit > 0 ? profit : 0],
                backgroundColor: ['#f87171', '#34c317', '#60a5fa'],
                hoverBackgroundColor: ['#ef4444', '#21790f', '#3b82f6'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const val = context.raw;
                        return ` ${context.label}: $${val.toLocaleString()}`;
                    }
                }
            }
        },
    };
    return (
        <section style={{
            height: "100%",
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center'
        }}>
            {/* NASLOV IZNAD */}
            <h2 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#333' }}>{title}</h2>

            <div style={{ height: '250px', position: 'relative', marginBottom: '20px' }}>
                <Pie data={data} options={options} />
            </div>

            {/* TOTAL BALANCE ISPOD */}
            <div style={{
                borderTop: '1px solid #eee',
                paddingTop: '15px',
                marginTop: '10px'
            }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Total Balance</span>
                <h3 style={{
                    fontSize: '24px',
                    margin: '5px 0 0 0',
                    color: totalBalance > 0 ? '#34c317' : totalBalance < 0 ? '#f87171' : '#9d9ea5'
                }}>
                    ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </h3>
            </div>
        </section>
    )
}

export default PieChart
