import React from 'react'
import Navigation from '../../NavigatioLinkComponent/Navigation'


//import css
import "./HeaderNavigation.css";
import Image from '../../Images/Image';
import { AboutUs, SingIn } from '../../../../assets/NavIcons';
import DarkModeToggle from '../../ToogleSwitchComponents/DarkModeToggle';

const HeaderNavigation = ({ isSideMenuOpen, toggleSideMenu }) => {
    return (
        <nav className={`navigationSection ${isSideMenuOpen ? "active" : "close"}`}>
            <ul className='navigationUl'>

                <li className='navigationLi'>
                    <Navigation to="/aboutUs" className="navigationLink">
                        <Image src={AboutUs} variant="headerImg" />
                        <p>About Us</p>
                    </Navigation>
                </li>

                <li className='navigationLi'>
                    <Navigation to="/signIn" className="navigationLink">
                        <Image src={SingIn} variant="headerImg" />
                        <p>Sing in</p>
                    </Navigation>
                </li>

            </ul>
        </nav>
    )
}

export default HeaderNavigation