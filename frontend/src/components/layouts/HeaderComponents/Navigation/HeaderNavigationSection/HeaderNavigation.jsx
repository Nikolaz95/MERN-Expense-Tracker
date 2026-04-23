import React, { useState } from 'react'
import Navigation from '../../../NavigatioLinkComponent/Navigation'
import Image from '../../../Images/Image';
import { AboutUs, SingIn } from '../../../../../assets/NavIcons';
import UserNavigation from '../UserNavigationSection/UserNavigation';

//import css
import "./HeaderNavigation.css";

import useAuthBtnFunction from '../../../../hooks/useAuthBtnFunction';

const HeaderNavigation = ({ isSideMenuOpen, toggleSideMenu, }) => {
    const { user, handleLogOut } = useAuthBtnFunction();

    return (
        <nav className={`navigationSection ${isSideMenuOpen ? "active" : "close"}`}>
            <ul className='navigationUl'>

                <li className='navigationLi'>
                    <Navigation to="/aboutUs" className="navigationLink">
                        <Image src={AboutUs} variant="headerImg" />
                        <p>About Us</p>
                    </Navigation>
                </li>
                {user ? (
                    <UserNavigation user={user} handleLogOut={handleLogOut} />
                ) : (
                    <li className='navigationLi'>
                        <Navigation to="/signIn" className="navigationLink">
                            <Image src={SingIn} variant="headerImg" />
                            <p>Sing in</p>
                        </Navigation>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default HeaderNavigation