import React, { useRef, useState } from 'react'
import Navigation from '../NavigatioLinkComponent/Navigation'
import "./UserAccordion.css"
import { DefoultProfile } from '../../../assets/SideBarIcons'
import Image from '../Images/Image'
import useClickOutside from '../../hooks/useClickOutside'

const SideBarAccordion = ({ user, onClose, handleLogOut }) => {
    const [isOpen, setIsOpen] = useState(false)
    const accordionRef = useRef(null);
    useClickOutside(accordionRef, () => setIsOpen(false));
    return (
        <li className="accordionWrapper" ref={accordionRef}>

            {/* Trigger - Otvara listu na klik */}
            <button
                className="accordionTrigger"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <Image src={user?.avatar?.url ?? DefoultProfile} variant="headerImg" />
                <span>{user?.name?.substring(0, 6)}</span>
                <span className={`accordionArrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            {/* Accordion lista */}
            {isOpen && (
                <ul className="accordionList">

                    {/* LOGIKA: Pokaži Dashboard samo ako je user logiran I ima role 'admin' */}
                    {user?.role === "admin" && (
                        <li>
                            <Navigation to="/admin/dashBoard" onClick={onClose}>
                                <span>Dashboard</span>
                            </Navigation>
                        </li>
                    )}

                    <li>
                        <Navigation to="/user/settings-Profile" onClick={onClose}>
                            <span>Profile</span>
                        </Navigation>
                    </li>
                    <li>
                        <button className="accordionLogout" onClick={handleLogOut} >
                            Logout
                        </button>
                    </li>
                </ul>
            )}

        </li>
    )
}

export default SideBarAccordion