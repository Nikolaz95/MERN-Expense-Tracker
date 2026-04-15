import React from 'react'

import titleName from '../../hooks//useTitle';

//import css
import "./HomePage.css";
import MainLayout from '../../layouts/ContentLayout/MainLayout';
import ImageBackground from '../../layouts/ImageBackground/ImageBackground';
import { HomePageImg } from '../../../assets/LogoIcons';
import Button from '../../layouts/Buttons/Button';
import Navigation from '../../layouts/NavigatioLinkComponent/Navigation';
import { FundAccounting } from '../../../assets/BtnIcons';
import { LogoImg } from '../../../assets/NavIcons';


const HomePage = () => {
    titleName('Home Page', LogoImg);
    return (
        <>
            <MainLayout>
                <ImageBackground imgSrc={HomePageImg} />
                <section className='contentHomePage'>
                    <Navigation to="/userDashBoard" className="navigationLink">
                        <Button icon={FundAccounting}>
                            <p>Start Tracking Now</p>
                        </Button>
                    </Navigation>

                </section>
            </MainLayout>
        </>
    )
}

export default HomePage