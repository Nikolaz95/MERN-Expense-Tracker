import React from 'react'
import titleName from '../../hooks//useTitle';
import { useMoveBack } from '../../hooks/useMoveBack';

//import css
import "./ErrorPage.css";
import Image from '../../layouts/Images/Image';
import { ErrorImg, ErrorLayoutImg } from '../../../assets/LogoIcons';
import MainLayout from '../../layouts/ContentLayout/MainLayout';
import ImageBackground from '../../layouts/ImageBackground/ImageBackground';
import Button from '../../layouts/Buttons/Button';
import { GoBack } from '../../../assets/BtnIcons';

const ErrorPage = () => {
    const goBack = useMoveBack();
    titleName('Error Page');
    return (
        <>
            <MainLayout>
                <ImageBackground imgSrc={ErrorLayoutImg} />
                <div className="erorTopContent">
                    <Button onClick={goBack} icon={GoBack}>
                        <p>Go Back</p>
                    </Button>
                </div>
                <main className='mainErrorContent'>
                    <Image src={ErrorImg} alt="" className='imgEror' />
                    <p className="textEror vibrate1">This page not exist</p>

                    <Image src={ErrorImg} alt="" className='imgEror' />
                </main>
            </MainLayout>
        </>


    )
}

export default ErrorPage