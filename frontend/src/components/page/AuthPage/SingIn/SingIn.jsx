import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';

//import css
import AuthPage from '../AuthPage';
import { SingInIcon } from '../../../../assets/LogoIcons';

const SingIn = () => {
    titleName('Sing In Page', SingInIcon);
    return (
        <>
            <AuthPage type="login" />
        </>
    )
}

export default SingIn
