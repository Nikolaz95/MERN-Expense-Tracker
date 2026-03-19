import React, { useState } from 'react'
//import css
import styled from 'styled-components';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../../NavigatioLinkComponent/Navigation';
import HeaderNavigation from '../HeaderNavigationSection/HeaderNavigation';
import HamMenu from '../HamMenu/HamMenu';

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
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    const toggleSideMenu = (e) => {
        e.stopPropagation();
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }
    return (
        <HeaderSection>
            <section className={styles.contentHeader}>
                <Logo />
                <HeaderNavigation isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
                <HamMenu toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
            </section>
        </HeaderSection>
    )
}

export default Header