import React, { useState } from 'react'
import Navigation from '../../../NavigatioLinkComponent/Navigation'
import Image from '../../../Images/Image';
import { AboutUs, SingIn } from '../../../../../assets/NavIcons';
import UserNavigation from '../UserNavigationSection/UserNavigation';
import { useGetMeQuery } from '../../../../../redux/api/userApi';
import { useSelector } from 'react-redux';


//import css
import "./HeaderNavigation.css";

const HeaderNavigation = ({ isSideMenuOpen, toggleSideMenu, }) => {

    const { isLoading } = useGetMeQuery();

    const { user } = useSelector((state) => state.auth);


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
                    <UserNavigation user={user} />
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