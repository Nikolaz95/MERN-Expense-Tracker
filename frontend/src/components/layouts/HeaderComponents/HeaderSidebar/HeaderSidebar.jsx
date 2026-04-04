import React, { useEffect } from 'react'
import Navigation from '../../NavigatioLinkComponent/Navigation'
import Image from '../../Images/Image'
import { AboutUs, SingIn } from '../../../../assets/NavIcons'

//import css
import "./HeaderSidebar.css";

const HeaderSidebar = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    return (
        <>
            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
            />
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="sidebar-close" onClick={onClose}>✕</button>
                <nav>
                    <ul className="sidebar-nav">
                        <li>
                            <Navigation to="/aboutUs">
                                <Image src={AboutUs} variant="headerImg" />
                                <span>About Us</span>
                            </Navigation>
                        </li>
                        <li>
                            <Navigation to="/signIn">
                                <Image src={SingIn} variant="headerImg" />
                                <span>Sign in</span>
                            </Navigation>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default HeaderSidebar
