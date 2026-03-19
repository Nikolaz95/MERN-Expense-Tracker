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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const GrupedBarChart = ({ dataStore }) => {

    // 1. State za period
    const [period, setPeriod] = useState('daily');

    const currentData = dataStore[period];

    const chartData = {
        labels: currentData.labels,
        datasets: [
            {
                label: 'Profit',
                data: currentData.income.map((inc, i) => inc - Math.abs(currentData.expenses[i])),
                backgroundColor: '#60a5fa', // Plava
                stack: 'Stack 0', // ISTI stack ID za sve
                borderRadius: { topLeft: 4, topRight: 4 },
            },
            {
                label: 'Income',
                data: currentData.income,
                backgroundColor: '#49e023', // Zelena
                stack: 'Stack 0',
                // Bez border radiusa ovde jer je u sredini/na dnu gornjeg dela
            },
            {
                label: 'Expenses',
                // KLJUČ: Negativna vrednost ga šalje ispod nule
                data: currentData.expenses.map(val => -Math.abs(val)),
                backgroundColor: '#f87171', // Crvena
                stack: 'Stack 0',
                borderRadius: { bottomLeft: 4, bottomRight: 4 },
            },
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    // Crta liniju nule (X osu) preko grafikona
                    drawOnChartArea: true
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    // Opciono: formatiranje da negativni brojevi izgledaju lepše
                    callback: (value) => value < 0 ? `-$${Math.abs(value)}` : `$${value}`
                }
            }
        }
    };

    // Stil za dugmiće (možeš ovo prebaciti u CSS)
    const btnStyle = (isActive) => ({
        padding: '5px 12px',
        marginLeft: '5px',
        cursor: 'pointer',
        backgroundColor: isActive ? '#4ade80' : '#f3f4f6',
        color: isActive ? '#fff' : '#000',
        border: 'none',
        borderRadius: '4px',
        fontSize: '12px'
    });
    return (
        <div className="chart-container">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
                {['daily', 'weekly', 'monthly', 'yearly'].map((p) => (
                    <button
                        key={p}
                        onClick={() => setPeriod(p)}
                        style={btnStyle(period === p)}
                    >
                        {p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                ))}
            </div>
            <div style={{ height: '350px', width: '100%' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}

export default GrupedBarChart
