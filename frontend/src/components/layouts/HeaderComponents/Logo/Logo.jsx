import React from 'react'
import Navigation from '../../NavigatioLinkComponent/Navigation'
import Image from '../../Images/Image'
import { LogoImg } from '../../../../assets/NavIcons'

const Logo = () => {
    return (
        <Navigation to="/">
            <Image src={LogoImg} variant="logo" alt="Logo" />
        </Navigation>
    )
}

export default Logo