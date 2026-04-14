import React, { useEffect, useRef, useState } from 'react'
import Image from '../../../Images/Image'
import { DefoultProfile } from '../../../../../assets/SideBarIcons';

import "./UserNavigation.css"
import Menu from '../../../Menu/Menu';
import { adminLinks, baseUserLinks } from '../../../../constants/userDropDownNavigation';
import useClickOutside from '../../../../hooks/useClickOutside';

const UserNavigation = ({ user }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, () => setIsDropdownOpen(false));
    const menuItems = [
        // 1. Ako je admin, dodajemo admin linkove na početak
        ...(user?.role === "admin" ? adminLinks : []),

        // 2. Dodajemo osnovne linkove koji idu svima
        ...baseUserLinks,

        // 3. Logout dodajemo na kraj jer on ima onClick funkciju, a ne putanju
        {
            id: 99,
            label: "Logout",
            onClick: () => {
                console.log("User logged out");
                // Ovdje ide tvoja prava logout logika
            }
        }
    ];

    return (
        <li className="userNavWrapper" ref={wrapperRef}>
            <div className="userNavTrigger" onClick={() => setIsDropdownOpen(prev => !prev)}>
                <Image src={user?.avatar?.url ?? DefoultProfile} variant="headerImg" />
                <p>{user?.name?.substring(0, 6)}</p>
            </div>
            <Menu isOpen={isDropdownOpen} items={menuItems} />
        </li>
    )
}

export default UserNavigation