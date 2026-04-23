import React, { useState } from 'react'
import Button from '../../../layouts/Buttons/Button'
import Image from '../../../layouts/Images/Image'
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation'

//import css
import "./DashboardSidebar.css";
import { DefoultProfile, LogOut, openMenu } from '../../../../assets/SideBarIcons';
import { DASHBOARD_SIDEBAR_CONFIG } from '../../../routes/sidebarConfig.js'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLazyLogoutQuery } from '../../../../redux/api/authApi.js';
import { useGetMeQuery } from '../../../../redux/api/userApi.js';
import useAuthBtnFunction from '../../../hooks/useAuthBtnFunction.js';

const DashboardSidebar = () => {

    const { user, handleLogOut } = useAuthBtnFunction();
    const [curOpenDropdown, setCurOpenDropdown] = useState(null);
    const [sideIsOpen, setSideIsOpen] = useState(false);

    const handleToggle = (id) => {
        setCurOpenDropdown(curOpenDropdown === id ? null : id);
    };

    // Toggle function to open/close the sidebar
    const toggleSidebar = () => {
        setSideIsOpen(!sideIsOpen);
    };
    // ← koristiš SIDEBAR_CONFIG[user.role] umjesto dataSideBarContent
    const sidebarData = DASHBOARD_SIDEBAR_CONFIG[user?.role] ?? []

    const filteredSidebarData = sidebarData.filter(item => {
        // If no roles specified, show to everyone
        if (!item.roles) return true;
        // Otherwise check if user's role is included
        return item.roles.includes(user?.role);
    });


    return (
        <aside className={`dashBoardSideBarSection ${sideIsOpen ? 'open' : 'closed'}`}>
            <nav className='dashBoardSideBNav'>
                <div className="sideNavBarTop">
                    <Button variant="openBtn">
                        <Image src={openMenu} variant="btnIcon" onClick={toggleSidebar} />
                    </Button>
                    <Image src={user?.avatar ? user?.avatar?.url : DefoultProfile}
                        title={user?.name}
                        variant="smallImg" />
                    {user?.name}
                </div>

                <div className="sideNavMainContent">
                    {filteredSidebarData.map((sidebar) => (
                        <div key={sidebar.id} className={sideIsOpen ? 'active' : 'close'}>
                            <div className="sideNavLink" onClick={() => handleToggle(sidebar.id)}>
                                <Image src={sidebar.icon} variant="sideBarNavIcon" />
                                {sideIsOpen && <span className="navText">{sidebar.titleName}</span>}
                            </div>

                            {curOpenDropdown === sidebar.id && (
                                <div className={`dashBoardDropdownSideBar ${sideIsOpen ? 'open' : 'closed'}`}>
                                    <ul>
                                        {sidebar.dropDownList?.map((dropdownItem) => (
                                            <li key={dropdownItem.title}>
                                                <Navigation to={dropdownItem.path}>
                                                    <Image src={dropdownItem.icon} variant="iconDropDown" />
                                                    {sideIsOpen && <span>{dropdownItem.title}</span>}
                                                </Navigation>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className='sideNavLinklogOut'>
                        <Button variant="sideBtnlogOut" onClick={handleLogOut}>
                            <Image src={LogOut} variant="iconDropDown" />
                            {sideIsOpen && <span className="navText">Log Out</span>}
                        </Button>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default DashboardSidebar
