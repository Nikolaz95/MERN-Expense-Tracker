import React from 'react'

//import css
import "./MainLayout.css";
import ImageBackground from '../ImageBackground/ImageBackground';

const MainLayout = ({ children }) => {
    return (
        <>
            <ImageBackground />
            <section className="contentLayout">
                {children}
            </section>
        </>

    )
}

export default MainLayout