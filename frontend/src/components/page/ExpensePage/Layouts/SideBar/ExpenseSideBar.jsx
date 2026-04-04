import React, { useState } from 'react'

//import css
import "./ExpenseSideBar.css";
import { NavLink } from 'react-router-dom';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import Image from '../../../../layouts/Images/Image';
import { CurrencyExchange, DashBoard, Expenses, Incoms, LogOut, Transactions } from '../../../../../assets/SideBarIcons';
import { LogoImg } from '../../../../../assets/NavIcons';
import Button from '../../../../layouts/Buttons/Button';

import { EXPENSE_SIDEBAR_LINKS } from '../../../../routes/sidebarConfig.js'  // ← putanja do tvog filea


const ExpenseSideBar = ({ isOpen, onClose }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>

            {/* <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
            />

            <aside className={`asideSideBar ${collapsed ? 'collapsed' : ''} ${isOpen ? 'open' : ''}`}>


                <section className='sideBarTopSection'>
                    <Navigation to="/" variant='sideBarNavContent'>
                        <Image src={LogoImg} variant="logo" />
                    </Navigation>
                </section>
                <section className='sideBarNavSection'>
                    <ul className='sideBarUl'>
                        <li >
                            <Navigation to="/userDashBoard" variant='sideBarNavContent'>
                                <Image src={DashBoard} variant="smallImg" />
                                <p>Dashboard</p>
                            </Navigation>
                        </li>
                        <li>
                            <Navigation to="/userTransactions" variant='sideBarNavContent'>
                                <Image src={Transactions} variant="smallImg" />
                                <p>View Transactions</p>
                            </Navigation>
                        </li>
                        <li>
                            <Navigation to="/userIncoms" variant='sideBarNavContent'>
                                <Image src={Incoms} variant="smallImg" />
                                <p>Incoms</p>
                            </Navigation>
                        </li>
                        <li>
                            <Navigation to="/userExpenses" variant='sideBarNavContent'>
                                <Image src={Expenses} variant="smallImg" />
                                <p>Expenses</p>
                            </Navigation>
                        </li>

                        <li>
                            <Navigation to="/currencySettings" variant='sideBarNavContent'>
                                <Image src={CurrencyExchange} variant="smallImg" />
                                <p>Settings</p>
                            </Navigation>
                        </li>


                    </ul>
                </section>
                <section className='sideBarBottomSection'>
                    <Button variant="loginBtn"
                        icon={LogOut}
                        iconPosition="left">
                        <p>Log Out</p>
                    </Button>

                </section>

            </aside> */}

            <>
                <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
                <aside className={`asideSideBar ${collapsed ? 'collapsed' : ''} ${isOpen ? 'open' : ''}`}>
                    <section className='sideBarTopSection'>
                        <Navigation to="/" variant='sideBarNavContent'>
                            <Image src={LogoImg} variant="logo" />
                        </Navigation>
                    </section>
                    <section className='sideBarNavSection'>
                        <ul className='sideBarUl'>
                            {EXPENSE_SIDEBAR_LINKS.map((item) => (
                                <li key={item.title}>
                                    <Navigation to={item.path} variant='sideBarNavContent'>
                                        <Image src={item.icon} variant="smallImg" />
                                        <p>{item.title}</p>
                                    </Navigation>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className='sideBarBottomSection'>
                        <Button variant="loginBtn"
                            icon={LogOut}
                            iconPosition="left">
                            Log Out
                        </Button>
                    </section>
                </aside>
            </>

        </>
    )
}

export default ExpenseSideBar
