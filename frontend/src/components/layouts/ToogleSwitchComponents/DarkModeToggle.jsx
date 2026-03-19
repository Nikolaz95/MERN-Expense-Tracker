import React from 'react'
import Button from '../Buttons/Button'
import { useDarkMode } from './DarkModeContext';
import { DarkMode, LightMode } from '../../../assets/NavIcons';
import Image from '../Images/Image';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const iconSrc = isDarkMode ? DarkMode : LightMode;
    return (
        <Button onClick={toggleDarkMode} variant='toggleSwitch'>
            <Image src={iconSrc} />
            {/* {isDarkMode ? <LightMode /> : <DarkMode />} */}
        </Button>
    )
}

export default DarkModeToggle