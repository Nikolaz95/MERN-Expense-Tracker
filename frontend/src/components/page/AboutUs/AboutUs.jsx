import React from 'react'
import titleName from '../../hooks//useTitle';

//import css
import "./AboutUs.css";

import MainLayout from '../../layouts/ContentLayout/MainLayout'
import ImageBackground from '../../layouts/ImageBackground/ImageBackground'
import { AboutUsIcon, HomePageImg } from '../../../assets/LogoIcons'
import Button from '../../layouts/Buttons/Button';
import AboutCardSection from './Layouts/MiddleSectionUI/AboutCardSection/AboutCardSection';
import AboutStepsCard from './Layouts/MiddleSectionUI/AboutStepsCardSection/AboutStepsCard';

const AboutUs = () => {
    titleName('About Us Page', AboutUsIcon);
    return (
        <>
            <ImageBackground imgSrc={HomePageImg} />
            <main className='contentAboutUs'>

                <section className='topAboutUsSection'>
                    <h1>Track your money,</h1>
                    <p>flow with ease.</p>

                    <p>BudgetFlow gives you a clear picture of income and expenses — with real-time currency conversion and visual reports in one place.</p>
                    <div>
                        <Button>
                            Start free
                        </Button>
                    </div>
                </section>

                <section className='middleAboutUsSection'>
                    <section className='functionalitiesSection'>
                        <h1>Functionalities</h1>
                        <h3>Everything you need in one place</h3>
                        <p>A simple but powerful tool intended for everyone who wants control over their finances.</p>
                    </section>
                    <AboutCardSection />
                    <section className='howWorkSection'>
                        <h1>How it works</h1>
                        <h2>Three steps to clarity</h2>
                        <AboutStepsCard />
                    </section>
                </section>


                <section className='bottomAboutUsSection'>
                    <h1>Ready for control over finances?</h1>
                    <p>Create an account for free and start tracking money today.</p>
                    <div className="btnSection">
                        <Button>Create Accoun</Button>
                        <Button>Log In</Button>
                    </div>


                </section>

            </main>
        </>
    )
}

export default AboutUs