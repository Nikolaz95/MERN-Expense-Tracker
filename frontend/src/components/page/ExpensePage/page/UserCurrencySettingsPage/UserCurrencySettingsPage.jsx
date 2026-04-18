import React from 'react'
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import titleName from '../../../../hooks/useTitle';
import { CurrencyExchange } from '../../../../../assets/SideBarIcons';

// styled css
import styled from "styled-components";
//import css
import "./UserCurrencySettingsPage.css";
import { useCurrency } from '../../../../context/CurrencyContext/CurrencyContext';

const UserCurrencySettingsLayout = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    border: 1px solid;
    padding: 10px;
    gap: 20px;
`;

const CurrencyValueSection = styled.select`
width: 100px;
`;

const UserCurrencySettingsPage = () => {
    titleName('User Currency Settings Page', CurrencyExchange);
    const { currency, changeCurrency, currencies, loading } = useCurrency();
    return (
        <>
            <UserExpenseLayout>
                <section className='userCurrencySettingLayout'>
                    <h1>User Currency Settings</h1>
                    <UserCurrencySettingsLayout>
                        <h1>Choose Currency</h1>
                        <p>Current currency: <strong>{currency.value}</strong></p>
                        {loading ? (
                            <p>Loading currencies...</p>
                        ) : (
                            <CurrencyValueSection
                                value={currency.value}
                                onChange={(e) => changeCurrency(e.target.value)}
                            >
                                {currencies.map(c => (
                                    <option key={c.value} value={c.value}>
                                        {c.value}
                                    </option>
                                ))}
                            </CurrencyValueSection>
                        )}
                    </UserCurrencySettingsLayout>
                </section>

            </UserExpenseLayout>
        </>
    )
}

export default UserCurrencySettingsPage
