import { useState } from 'react';


import titleName from '../../hooks/useTitle';
//import css
import "./UserDashBoardPage.css";


// import components
import UserExpenseLayout from './Layouts/UserExpenseLayout/UserExpenseLayout';
import { DashBoardTitleIcon } from '../../../assets/IconTitle';
import TransactionTable from '../../layouts/Table/TransactionTable';

// import data
import transitionData from '../../data/TransactionData';
import GrupedBarChart from '../../layouts/Chart/GrupedBarChart';
import PieChart from '../../layouts/Chart/PieChart';
import { transactionColumns } from '../../layouts/Table/TableColumns/TransactionColumns';
import Table from '../../layouts/Table/Table';
import Button from '../../layouts/Buttons/Button';
import Navigation from '../../layouts/NavigatioLinkComponent/Navigation';

const UserDashBoardPage = () => {
    titleName('User Expense Page', DashBoardTitleIcon);

    const [currentTrans, setCurrentTrans] = useState([]);

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            return "Good Morning";
        } else if (hour >= 12 && hour < 18) {
            return "Good Afternoon";
        } else if (hour >= 18 && hour < 22) {
            return "Good Evening";
        } else {
            return "Good Evening";
        }
    };


    const dashboardDataStore = {
        daily: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            income: [100, 200, 150, 300, 250, 400, 350],
            expenses: [80, 120, 100, 150, 110, 200, 150]
        },
        weekly: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            income: [1200, 1500, 1100, 1800],
            expenses: [800, 900, 700, 1000]
        },
        monthly: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            income: [4200, 4500, 3900, 5200, 4800, 5500, 10000],
            expenses: [2100, 2300, 2000, 2800, 2500, 2700, 1000]
        },
        yearly: {
            labels: ['2023', '2024', '2025', '2026'],
            income: [5000, 2000, 9000, 8000],
            expenses: [3000, 2000, 1000, 5000]
        }
    };

    const dashboardColumns = transactionColumns.filter(col =>
        ["recipient", "category", "amount"].includes(col.field)
    );


    return (
        <>
            <UserExpenseLayout icon={DashBoardTitleIcon}>
                <section className='contentSectionUserDashBoard'>

                    <section>
                        <h1>{getGreeting()}, Nikola</h1>
                        <p>This is your finance report</p>
                    </section>

                    <section className="UserDashBoardTopContent">
                        <article className='userDashBoardInfo'>
                            <h1>Total Balance</h1>
                            <p>$4,836.00</p>
                        </article>
                        <article className='userDashBoardInfo'>
                            <h1>Total Income</h1>
                            <p>$3,814.25</p>
                        </article>
                        <article className='userDashBoardInfo'>
                            <h1>Total Expenses</h1>
                            <p>$1,700.50</p>
                        </article>
                    </section>


                    <section className='UserDashBoardMiddleContent'>
                        <article className='recentTransaction'>
                            <section className='recentTransactionTop'>
                                <h1>Transaction history</h1>
                                <Navigation to="/userTransactions">
                                    <Button>
                                        View All
                                    </Button>
                                </Navigation>
                            </section>
                            <section className='recentTransactionSection'>
                                {/* <TransactionTable currentTrans={currentTrans} /> */}
                                <Table data={transitionData} columns={dashboardColumns} />
                            </section>
                        </article>

                        <article className='financOverview'>
                            <PieChart
                                income={110}
                                expenses={20}
                                /* income={0}
                                expenses={0} */
                                title="Financial Overview"
                            />
                        </article>
                    </section>


                    <section className='UserDashBoardBottomContent'>
                        <article className='finChartOverview'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <h1>Financial Comparison</h1>
                            </div>

                            <GrupedBarChart dataStore={dashboardDataStore} />
                        </article>
                    </section>


                </section>
            </UserExpenseLayout>
        </>
    )
}

export default UserDashBoardPage