import React, { useState } from 'react'

//import css
import "./ExpenseSideBar.css";
import { NavLink, useNavigate } from 'react-router-dom';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import Image from '../../../../layouts/Images/Image';
import { CurrencyExchange, DashBoard, Expenses, Incoms, LogOut, Transactions } from '../../../../../assets/SideBarIcons';
import { LogoImg } from '../../../../../assets/NavIcons';
import Button from '../../../../layouts/Buttons/Button';

import { EXPENSE_SIDEBAR_LINKS } from '../../../../routes/sidebarConfig.js'  // ← putanja do tvog filea
import useAuthBtnFunction from '../../../../hooks/useAuthBtnFunction.js';


const ExpenseSideBar = ({ isOpen, onClose }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { user, handleLogOut } = useAuthBtnFunction();

    return (
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
                        iconPosition="left"
                        onClick={handleLogOut}>
                        Log Out
                    </Button>
                </section>
            </aside>
        </>
    )
}

export default ExpenseSideBar
