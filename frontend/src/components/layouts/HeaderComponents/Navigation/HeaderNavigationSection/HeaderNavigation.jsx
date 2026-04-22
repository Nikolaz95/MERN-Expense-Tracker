import React, { useState } from 'react'
import Navigation from '../../../NavigatioLinkComponent/Navigation'
import Image from '../../../Images/Image';
import { AboutUs, SingIn } from '../../../../../assets/NavIcons';
import UserNavigation from '../UserNavigationSection/UserNavigation';
import { useGetMeQuery } from '../../../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';


//import css
import "./HeaderNavigation.css";
import { useLazyLogoutQuery } from '../../../../../redux/api/authApi';
import { useNavigate } from 'react-router-dom';

const HeaderNavigation = ({ isSideMenuOpen, toggleSideMenu, }) => {
    const navigate = useNavigate();
    const { isLoading } = useGetMeQuery();
    const [logout] = useLazyLogoutQuery();


    const { user } = useSelector((state) => state.auth);

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


    return (
        <nav className={`navigationSection ${isSideMenuOpen ? "active" : "close"}`}>
            <ul className='navigationUl'>

                <li className='navigationLi'>
                    <Navigation to="/aboutUs" className="navigationLink">
                        <Image src={AboutUs} variant="headerImg" />
                        <p>About Us</p>
                    </Navigation>
                </li>
                {user ? (
                    <UserNavigation user={user} handleLogOut={handleLogOut} />
                ) : (
                    <li className='navigationLi'>
                        <Navigation to="/signIn" className="navigationLink">
                            <Image src={SingIn} variant="headerImg" />
                            <p>Sing in</p>
                        </Navigation>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default HeaderNavigation