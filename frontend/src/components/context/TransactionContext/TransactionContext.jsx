import { createContext, useContext, useMemo } from "react";
import { useGetUserTransactionsListQuery } from "../../../redux/api/transactionsApi";

const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }) => {
    const { data, isLoading } = useGetUserTransactionsListQuery();
    const transactions = data?.userTransactionList || [];

    console.log("TRANSACTIONS U CONTEXTU:", transactions);

    const totalIncome = useMemo(() =>
        transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0),
        [transactions]
    );

    const totalExpense = useMemo(() =>
        transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0),
        [transactions]
    );

    const totalBalance = totalIncome + totalExpense;

    // ← grupiranje po periodu iz stvarnih podataka
    const dashboardDataStore = useMemo(() => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const getWeekNumber = (date) => {
            const d = new Date(date);
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() + 4 - (d.getDay() || 7));
            const yearStart = new Date(d.getFullYear(), 0, 1);
            return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        };

        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);
        const fourWeeksAgo = new Date();
        fourWeeksAgo.setDate(today.getDate() - 28);

        // DAILY
        const dailyMap = {};
        transactions
            .filter(t => new Date(t.date) >= sevenDaysAgo)
            .forEach(t => {
                const date = new Date(t.date);
                const label = `${dayNames[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
                dailyMap[label] = dailyMap[label] || { income: 0, expenses: 0 };
                if (t.type === 'income') dailyMap[label].income += t.amount;
                else dailyMap[label].expenses += t.amount; // ← bez Math.abs()
            });

        const dailyLabels = Object.keys(dailyMap);
        const dailyIncome = dailyLabels.map(l => dailyMap[l].income);
        const dailyExpenses = dailyLabels.map(l => dailyMap[l].expenses);

        // WEEKLY
        const weeklyMap = {};
        transactions
            .filter(t => new Date(t.date) >= fourWeeksAgo)
            .forEach(t => {
                const weekNum = getWeekNumber(new Date(t.date));
                const label = `Week ${weekNum}`;
                weeklyMap[label] = weeklyMap[label] || { income: 0, expenses: 0, weekNum };
                if (t.type === 'income') weeklyMap[label].income += t.amount;
                else weeklyMap[label].expenses += t.amount; // ← bez Math.abs()
            });

        const weeklyLabels = Object.keys(weeklyMap).sort((a, b) =>
            weeklyMap[a].weekNum - weeklyMap[b].weekNum
        );
        const weeklyIncome = weeklyLabels.map(l => weeklyMap[l].income);
        const weeklyExpenses = weeklyLabels.map(l => weeklyMap[l].expenses);

        // MONTHLY
        const monthlyMap = {};
        transactions.forEach(t => {
            const date = new Date(t.date);
            const label = `${months[date.getMonth()]} ${date.getFullYear()}`;
            monthlyMap[label] = monthlyMap[label] || { income: 0, expenses: 0 };
            if (t.type === 'income') monthlyMap[label].income += t.amount;
            else monthlyMap[label].expenses += t.amount; // ← bez Math.abs()
        });

        const monthlyLabels = Object.keys(monthlyMap).sort((a, b) => new Date(a) - new Date(b));
        const monthlyIncome = monthlyLabels.map(l => monthlyMap[l].income);
        const monthlyExpenses = monthlyLabels.map(l => monthlyMap[l].expenses);

        // YEARLY
        const yearlyMap = {};
        transactions.forEach(t => {
            const year = String(new Date(t.date).getFullYear());
            yearlyMap[year] = yearlyMap[year] || { income: 0, expenses: 0 };
            if (t.type === 'income') yearlyMap[year].income += t.amount;
            else yearlyMap[year].expenses += t.amount; // ← bez Math.abs()
        });

        const yearlyLabels = Object.keys(yearlyMap).sort();
        const yearlyIncome = yearlyLabels.map(y => yearlyMap[y].income);
        const yearlyExpenses = yearlyLabels.map(y => yearlyMap[y].expenses);

        return {
            daily: { labels: dailyLabels, income: dailyIncome, expenses: dailyExpenses },
            weekly: { labels: weeklyLabels, income: weeklyIncome, expenses: weeklyExpenses },
            monthly: { labels: monthlyLabels, income: monthlyIncome, expenses: monthlyExpenses },
            yearly: { labels: yearlyLabels, income: yearlyIncome, expenses: yearlyExpenses },
        };
    }, [transactions]);

    const incomeDataStore = useMemo(() => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        const incomeOnly = transactions.filter(t => t.type === 'income');

        const sevenDaysMap = {};
        incomeOnly
            .filter(t => new Date(t.date) >= sevenDaysAgo)
            .forEach(t => {
                const date = new Date(t.date);
                const label = `${dayNames[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
                sevenDaysMap[label] = (sevenDaysMap[label] || 0) + t.amount;
            });

        const monthMap = {};
        incomeOnly.forEach(t => {
            const date = new Date(t.date);
            const label = `${months[date.getMonth()]} ${date.getFullYear()}`;
            monthMap[label] = (monthMap[label] || 0) + t.amount;
        });

        // ← sort po datumu
        const monthLabels = Object.keys(monthMap).sort((a, b) => new Date(a) - new Date(b));

        const yearLabels = [...new Set(incomeOnly.map(t => String(new Date(t.date).getFullYear())))].sort();

        return {
            '7days': { labels: Object.keys(sevenDaysMap), values: Object.values(sevenDaysMap) },
            'month': {
                labels: monthLabels,
                values: monthLabels.map(l => monthMap[l])  // ← vrijednosti po sortiranim labelama
            },
            'year': {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                years: yearLabels.map(year => ({
                    label: year,
                    values: Array(12).fill(0).map((_, i) =>
                        incomeOnly
                            .filter(t => new Date(t.date).getFullYear() === Number(year) && new Date(t.date).getMonth() === i)
                            .reduce((sum, t) => sum + t.amount, 0)
                    )
                }))
            }
        };
    }, [transactions]);

    const expenseDataStore = useMemo(() => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        const expenseOnly = transactions.filter(t => t.type === 'expense');

        const sevenDaysMap = {};
        expenseOnly
            .filter(t => new Date(t.date) >= sevenDaysAgo)
            .forEach(t => {
                const date = new Date(t.date);
                const label = `${dayNames[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
                sevenDaysMap[label] = (sevenDaysMap[label] || 0) + t.amount;
            });

        const monthMap = {};
        expenseOnly.forEach(t => {
            const date = new Date(t.date);
            const label = `${months[date.getMonth()]} ${date.getFullYear()}`;
            monthMap[label] = (monthMap[label] || 0) + t.amount;
        });

        // ← sort po datumu
        const monthLabels = Object.keys(monthMap).sort((a, b) => new Date(a) - new Date(b));

        const yearLabels = [...new Set(expenseOnly.map(t => String(new Date(t.date).getFullYear())))].sort();

        return {
            '7days': { labels: Object.keys(sevenDaysMap), values: Object.values(sevenDaysMap) },
            'month': {
                labels: monthLabels,
                values: monthLabels.map(l => monthMap[l])
            },
            'year': {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                years: yearLabels.map(year => ({
                    label: year,
                    values: Array(12).fill(0).map((_, i) =>
                        expenseOnly
                            .filter(t => new Date(t.date).getFullYear() === Number(year) && new Date(t.date).getMonth() === i)
                            .reduce((sum, t) => sum + t.amount, 0) // ← negativno
                    )
                }))
            }
        };
    }, [transactions]);


    return (
        <TransactionContext.Provider value={{
            transactions,
            totalIncome,
            totalExpense,
            totalBalance,
            dashboardDataStore,
            incomeDataStore,
            expenseDataStore
        }}>
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransaction = () => useContext(TransactionContext);