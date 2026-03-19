import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from './components/layouts/HeaderComponents/Header/Header';
import Footer from './components/layouts/FooterComponents/Footer';
import { DarkModeProvider } from './components/layouts/ToogleSwitchComponents/DarkModeContext';

const Root = () => {
    return (
        <DarkModeProvider>
            <div>
                <Toaster position="top-center" />
                <Header />
                <Outlet />
                <Footer />
            </div>
        </DarkModeProvider>
    )
}

export default Root