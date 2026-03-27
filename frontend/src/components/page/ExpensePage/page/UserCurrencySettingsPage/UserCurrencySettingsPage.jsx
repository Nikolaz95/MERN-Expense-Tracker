import React from 'react'
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import titleName from '../../../../hooks/useTitle';
import { CurrencyExchange } from '../../../../../assets/SideBarIcons';

// styled css
import styled from "styled-components";
//import css
import "./UserCurrencySettingsPage.css";
import { useCurrency } from '../../../../../context/CurrencyContext';

const UserCurrencySettingsLayout = styled.section`
display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    border: 1px solid;
`;

const UserCurrencySettingsContents = styled.section`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const UserCurrencySettingsPage = () => {
    titleName('User Currency Settings Page', CurrencyExchange);
    const { currency, changeCurrency, currencies, loading } = useCurrency();
    return (
        <>
            <UserExpenseLayout>
                <section className='userCurrencySettingLayout'>
                    <h1>User Currency Settings</h1>
                    <main className='userCurrencySettingMain'>
                        <h1>Choose Currency</h1>
                        <p>Current currency: <strong>{currency.value}</strong></p>
                        {loading ? (
                            <p>Loading currencies...</p>
                        ) : (
                            <select
                                value={currency.value}
                                onChange={(e) => changeCurrency(e.target.value)}
                            >
                                {currencies.map(c => (
                                    <option key={c.value} value={c.value}>
                                        {c.value}
                                    </option>
                                ))}
                            </select>
                        )}
                    </main>
                </section>

            </UserExpenseLayout>
        </>
    )
}

export default UserCurrencySettingsPage
