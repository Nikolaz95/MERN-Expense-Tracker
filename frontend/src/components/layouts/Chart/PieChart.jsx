import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartWrapper from './layouts/ChartWrapper';
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);



const PieChartMainSection = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
gap: 20px;
border-radius: 20px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);

@media (max-width: 768px) {
    text-align: center;
    width: 100%;
}

`;

const PieGrafikon = styled.div`
height: 300px;
position: relative;
@media (max-width: 375px) {
    height: 250px;
}
`;



const ChartHeaderText = styled.h3`
    text-align: center;
   font-size: 25px;
   

`;

const BotomSection = styled.section`
display: flex;
text-align: center;
flex-direction: column;
gap: 5px;
`;


const LineOvetTotalBalance = styled.div`
    border: 1px solid rgb(0, 0, 0);
`;

const TotalBalanceText = styled.h3`
font-size: 15px;
    color: rgb(5, 5, 5);
    font-weight: 500;
`;



const ChartBalanceInfo = styled.h3`
  font-size: 25px;
  /* margin: 5px 0 0 0; */
  color: ${({ $totalBalance }) => {
        if ($totalBalance > 0) return '#34c317'; // Zelena
        if ($totalBalance < 0) return '#f87171'; // Crvena
        return '#000000'; // Siva (nula)
    }};
`;

const PieChart = ({ income, expenses, title = "Financial Overview" }) => {
    const totalBalance = income - Math.abs(expenses);
    const profit = totalBalance;

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
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    font: { size: 12 }
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => ` ${context.label}: $${context.raw.toLocaleString()}`
                }
            }
        },
    };


    return (
        <PieChartMainSection>
            {/* Header sekcija */}
            <ChartHeaderText>{title}</ChartHeaderText>

            {/* Area za grafikon - fiksna visina je ključna */}
            <PieGrafikon>
                <Pie data={data} options={options} />
            </PieGrafikon>

            {/* Donja sekcija sa balansom */}
            <BotomSection>

                <LineOvetTotalBalance></LineOvetTotalBalance>
                <TotalBalanceText>
                    Total Balance
                </TotalBalanceText>
                <ChartBalanceInfo $totalBalance={totalBalance}>
                    ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </ChartBalanceInfo>
            </BotomSection>
        </PieChartMainSection>
    )
}

export default PieChart
