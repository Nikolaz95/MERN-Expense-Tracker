import React, { useState } from 'react'

//import css
import "./SideBar.css";

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <div
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

            </aside>

        </>
    )
}

export default SideBar
