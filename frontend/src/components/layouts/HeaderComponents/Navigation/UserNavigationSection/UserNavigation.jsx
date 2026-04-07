import React, { useEffect, useRef, useState } from 'react'
import Navigation from '../../../NavigatioLinkComponent/Navigation'
import Image from '../../../Images/Image'
import { DefoultProfile } from '../../../../../assets/SideBarIcons';

import "./UserNavigation.css"
import Menu from '../../../Menu/Menu';


const UserNavigation = ({ user }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown menu
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const wrapperRef = useRef(null);

    // Zatvori dropdown kad klikneš izvan
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const menuItems = [
        { id: 0, label: "Dashboard", path: "/dashboard" },
        { id: 1, label: "Profile", path: "/user/settings-Profile" },
        { id: 2, label: "Logout", onClick: () => console.log("logout") },
    ]

    return (
        <li className="userNavWrapper" ref={wrapperRef}>
            <div className="userNavTrigger" onClick={() => setIsDropdownOpen(prev => !prev)}>
                <Image src={user?.avatar?.url ?? DefoultProfile} variant="headerImg" />
                <p>{user.name.substring(0, 6)}</p>
            </div>

            <Menu isOpen={isDropdownOpen} items={menuItems} />
        </li>
    )
}

export default UserNavigation