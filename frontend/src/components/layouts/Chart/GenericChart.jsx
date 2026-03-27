import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js';
import ChartWrapper from './layouts/ChartWrapper';
import ChartFilterButtons from './layouts/ChartFilterButtons';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const periods = [
    { value: '7days', label: '7d' },
    { value: 'month', label: 'Mjesec' },
    { value: 'year', label: 'Godina' },
];

const GenericChart = ({ title, dataStore, themeColor }) => {
    const [period, setPeriod] = useState('7days');
    const currentData = dataStore[period];

    const datasets = period === 'year' && currentData.years
        ? currentData.years.map((yearObj, i) => ({
            label: `${title} ${yearObj.label}`,
            data: yearObj.values,
            backgroundColor: [themeColor, `${themeColor}CC`, `${themeColor}99`][i] || themeColor,
            borderRadius: 6,
        }))
        : [{ label: `${title}`, data: currentData.values, backgroundColor: themeColor, borderRadius: 8 }];
    return (
        <ChartWrapper
            title={`${title} Overview`}
            filters={
                <ChartFilterButtons periods={periods}
                    period={period} setPeriod={setPeriod}
                    themeColor={themeColor} />
            }
        >
            <Bar
                data={{ labels: currentData.labels, datasets }}
                options={{
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: period === 'year' } }
                }}
            />
        </ChartWrapper>
    )
}

export default GenericChart
