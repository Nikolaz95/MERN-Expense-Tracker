import React from 'react'

//import css
import "./ImageBackground.css";
import Image from '../Images/Image';

const ImageBackground = ({ imgSrc, variant }) => {
    return (
        <section className="imgBackground">
            <Image src={imgSrc} variant="homePageImg" />
        </section>
    )
}

export default ImageBackground