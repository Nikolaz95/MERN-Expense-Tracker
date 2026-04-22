import React, { useState } from 'react'
//import css
import styled from 'styled-components';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../../NavigatioLinkComponent/Navigation';
import HeaderNavigation from '../Navigation/HeaderNavigationSection/HeaderNavigation';
import HamMenu from '../HamMenu/HamMenu';
import HeaderSidebar from '../Navigation/HeaderSidebar/HeaderSidebar';

const HeaderSection = styled.header`
  display: flex;
  background-color: rgb(41, 175, 248);
  width: 100%;
  height: 120px;
  top: 0;
  padding: 10px;
  align-items: center;
  padding: 0px 5px;
`;

const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const user = {
        name: "nikola",
        role: "admin"
    }
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(null);

    const toggleSideMenu = (e) => {
        e.stopPropagation();
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }
    return (
        <HeaderSection>
            <section className={styles.contentHeader}>
                <Logo />
                <HeaderNavigation isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} user={isLogin ? user : null} />
                <HamMenu toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
                <HeaderSidebar isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} user={isLogin ? user : null} />
            </section>
        </HeaderSection>
    )
}

export default Header