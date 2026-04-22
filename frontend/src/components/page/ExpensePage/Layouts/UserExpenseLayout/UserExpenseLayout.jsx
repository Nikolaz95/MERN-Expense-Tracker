import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";

// import components
import SideBar from '../SideBar/ExpenseSideBar';
import Image from '../../../../layouts/Images/Image';
import { DefoultProfile } from '../../../../../assets/SideBarIcons';
import Button from '../../../../layouts/Buttons/Button';
import Menu from '../../../../layouts/Menu/Menu';
import useClickOutside from '../../../../hooks/useClickOutside';
import { adminLinks, baseUserLinks } from '../../../../constants/userDropDownNavigation';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../../../../../redux/api/userApi';
import { useLazyLogoutQuery } from '../../../../../redux/api/authApi';
import { useSelector } from 'react-redux';

const SectionUserExpaseDashBoard = styled.section`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px;
    border: 1px solid black;
    height: 99vh;
`;

const MainUserExpaseContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid black;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 20px;

    @media  screen and (max-width: 425px) {

    padding: 0;
  }
`;

const HeaderUserDashBoard = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: bisque;
    border-radius: 20px;
`;

const ContentSectionUserDashBoard = styled.section`
   display: flex;
    flex-direction: column;
gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
`;

const UserExpenseLayout = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const { isLoading } = useGetMeQuery();
    const [logout] = useLazyLogoutQuery();


    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useClickOutside(menuRef, () => setIsMenuOpen(false));

    const handleLogOut = async () => {
        try {
            await logout().unwrap();
            localStorage.removeItem('token');
            navigate("/", { replace: true }); // Replace in history
            window.location.reload(); // Force full reset if needed
        } catch (err) {
            toast.error(err?.data?.message || "Logout failed");
        }
    };

    const menuItems = [
        // Ako je admin, dodajemo Dashboard link na početak (iz tvog data fajla)
        ...(user?.role === "admin" ? adminLinks : []),

        // Dodajemo Profile i ostalo (iz tvog data fajla)
        ...baseUserLinks,

        // Logout ručno dodajemo
        { id: 99, label: "Logout", onClick: handleLogOut },
    ]
    return (
        <SectionUserExpaseDashBoard>
            <SideBar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <MainUserExpaseContent>
                <HeaderUserDashBoard>
                    <section className='headerContentLeft'>
                        <Button className='btn'
                            onClick={() => setIsSidebarOpen(true)} >
                            ☰
                        </Button>
                    </section>
                    <section className='headerContentRight' ref={menuRef}
                        style={{ position: "relative" }}>
                        <Image
                            src={user?.avatar?.url ?? DefoultProfile}
                            variant="smallImg"
                            title={user?.name}
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            style={{ cursor: "pointer" }}
                        />
                        <Menu isOpen={isMenuOpen} items={menuItems} />
                    </section>
                </HeaderUserDashBoard>
                <ContentSectionUserDashBoard>
                    {children}
                </ContentSectionUserDashBoard>
            </MainUserExpaseContent>
        </SectionUserExpaseDashBoard>
    )
}

export default UserExpenseLayout
