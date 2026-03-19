import React, { useState } from 'react'
import titleName from "../../hooks/useTitle";

//import css
import "./AuthPage.css";
import MainLayout from '../../layouts/ContentLayout/MainLayout';
import ImageBackground from '../../layouts/ImageBackground/ImageBackground';
import { HomePageImg } from '../../../assets/LogoIcons';
import BenefitsPanel from './BenefitsPanel';
import AuthForm from './AuthLayout/AuthForm';

const AuthPage = ({ type }) => {
    const isLogin = type === "login";

    titleName(isLogin ? "Sign In Page" : "Register Page");
    return (
        <MainLayout>
            <ImageBackground imgSrc={HomePageImg} />
            <section className="AuthSection">
                <main className="AuthSectionContent">
                    <h1 className="titleSingIn">
                        {isLogin ? "Sign In" : "Create Account"}
                    </h1>
                    <section className="formSection">
                        <aside>
                            <AuthForm type={type} />
                        </aside>
                        {isLogin && (
                            <aside>
                                <BenefitsPanel />
                            </aside>
                        )}
                    </section>
                </main>
            </section>
        </MainLayout>
    )
}

export default AuthPage
