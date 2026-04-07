import React, { useState } from 'react'
import Navigation from '../NavigatioLinkComponent/Navigation'
import "./UserAccordion.css"
import { DefoultProfile } from '../../../assets/SideBarIcons'
import Image from '../Images/Image'

const SideBarAccordion = ({ user, onClose }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li className="accordionWrapper">

            {/* Trigger */}
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
                    <li>
                        <Navigation to="/dashboard" onClick={onClose}>
                            <span>Dashboard</span>
                        </Navigation>
                    </li>
                    <li>
                        <Navigation to="/user/settings-Profile" onClick={onClose}>
                            <span>Profile</span>
                        </Navigation>
                    </li>
                    <li>
                        <Navigation to="/user/update-Profile" onClick={onClose}>
                            <span>Update Profile</span>
                        </Navigation>
                    </li>
                    <li>
                        <button
                            className="accordionLogout"
                            onClick={() => {
                                console.log("logout")
                                onClose()
                            }}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            )}

        </li>
    )
}

export default SideBarAccordion