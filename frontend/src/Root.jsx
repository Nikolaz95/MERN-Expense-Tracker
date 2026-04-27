import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from './components/layouts/HeaderComponents/Header/Header';
import Footer from './components/layouts/FooterComponents/Footer';
import GlobalModals from './components/context/modals/GlobalModals';
import { useDispatch } from 'react-redux';
import { useGetMeQuery } from './redux/api/userApi';

const Root = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetMeQuery();

    useEffect(() => {
        if (data?.user) {
            dispatch(setCredentials(data.user));
        }
    }, [data]);

    if (isLoading) return null;
    return (
        <div>
            <Toaster position="top-center" />
            <Header />
            <Outlet />
            <Footer />
            <GlobalModals />
        </div>
    )
}

export default Root