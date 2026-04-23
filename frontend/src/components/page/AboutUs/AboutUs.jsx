import React from 'react'
import titleName from '../../hooks//useTitle';

import MainLayout from '../../layouts/ContentLayout/MainLayout'
import ImageBackground from '../../layouts/ImageBackground/ImageBackground'
import { AboutUsIcon, HomePageImg } from '../../../assets/LogoIcons'

const AboutUs = () => {
    titleName('About Us Page', AboutUsIcon);
    return (
        <>
            <MainLayout>
                <ImageBackground imgSrc={HomePageImg} />

            </MainLayout>
        </>
    )
}

export default AboutUs