import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GenericChart = ({ title, dataStore, themeColor }) => {

    const [period, setPeriod] = useState('7days');



    const getDatasets = () => {
        const currentData = dataStore[period];

        // LOGIKA ZA VIŠE GODINA (Poređenje)
        if (period === 'year' && currentData.years) {
            const opacityColors = [themeColor, `${themeColor}CC`, `${themeColor}99`];
            return currentData.years.map((yearObj, index) => ({
                label: `${title} ${yearObj.label}`,
                data: yearObj.values,
                backgroundColor: opacityColors[index] || themeColor,
                borderRadius: 6,
            }));
        }

        // STANDARDNA LOGIKA
        return [{
            label: `${title} ($)`,
            data: currentData.values,
            backgroundColor: themeColor,
            borderRadius: 8,
        }];
    };

    const chartData = {
        labels: dataStore[period].labels,
        datasets: getDatasets(),
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: period === 'year' }, // Prikaži legendu samo na godini
        },
    };
    return (
        <div className="chart-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3>{title} Overview</h3>
                <div className="filter-buttons">
                    {['7days', 'month', 'year'].map((p) => (
                        <button
                            key={p}
                            onClick={() => setPeriod(p)}
                            style={btnStyle(period === p, themeColor)}
                        >
                            {p === '7days' ? '7d' : p === 'month' ? 'Mesec' : 'Godina'}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ height: '300px' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
}


// Pomoćni stil unutar komponente
const btnStyle = (isActive, color) => ({
    padding: '5px 12px',
    marginLeft: '5px',
    cursor: 'pointer',
    backgroundColor: isActive ? color : '#f3f4f6',
    color: isActive ? '#fff' : '#000',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px'
});

export default GenericChart
