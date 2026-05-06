import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartWrapper from './layouts/ChartWrapper';
import styled from "styled-components";
import { useCurrency } from '../../context/CurrencyContext/CurrencyContext';
import { useTransaction } from '../../context/TransactionContext/TransactionContext';
import { formatNumber } from '../../utils/formatNumber';

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

const PieChart = ({ title = "Financial Overview" }) => {
    const { convert, currency } = useCurrency();
    const { totalIncome, totalExpense, totalBalance } = useTransaction();

    const profit = totalBalance > 0 ? totalBalance : 0;
    const loss = totalBalance < 0 ? Math.abs(totalBalance) : 0;

    // ← dinamički labele i boje
    const labels = ['Expenses', 'Income'];
    const dataValues = [Math.abs(totalExpense), totalIncome];
    const backgroundColors = ['#f87171', '#34c317'];
    const hoverColors = ['#ef4444', '#21790f'];

    if (profit > 0) {
        labels.push('Profit');
        dataValues.push(profit);
        backgroundColors.push('#60a5fa');
        hoverColors.push('#3b82f6');
    }

    if (loss > 0) {
        labels.push('Loss');
        dataValues.push(loss);
        backgroundColors.push('#f97316');
        hoverColors.push('#ea580c');
    }

    const data = {
        labels,
        datasets: [{
            data: dataValues,
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverColors,
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
                    label: (context) => {
                        const value = context.raw;
                        const label = context.label;
                        const sign = label === 'Expenses' || label === 'Loss' ? '-' : '';
                        return ` ${label}: ${sign}${currency?.symbol} ${formatNumber(convert(value))}`;
                    }
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
                    {currency?.symbol} {formatNumber(convert(totalBalance))}
                </ChartBalanceInfo>
            </BotomSection>
        </PieChartMainSection>
    )
}

export default PieChart
