import React, { useState } from 'react'
import Image from '../../../layouts/Images/Image'
import { HidePassword, ShowPassword } from '../../../../assets/Icons'
import Button from '../../../layouts/Buttons/Button'
import { iconSingIn } from '../../../../assets/BtnIcons'
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation'
import Form from '../../../layouts/FormComponents/FormWrapper/Form'
import Label from '../../../layouts/FormComponents/FormWrapper/Label/Label'
import Input from '../../../layouts/FormComponents/FormWrapper/Input/Input'

const AuthForm = ({ type }) => {

    const isRegister = type === "register";

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    return (
        <Form>

            {/* USERNAME SAMO ZA REGISTER */}
            {isRegister && (
                <>
                    <Label htmlFor="username">Your Username:</Label>
                    <Input
                        type="text"
                        id="username"
                        variant="inputFormRegSig"
                        placeholder="username..."
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                        }
                    />
                </>
            )}

            <Label htmlFor="mail">Your Email:</Label>
            <Input
                type="email"
                id="mail"
                variant="inputFormRegSig"
                placeholder="fake@email..."
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />

            <Label htmlFor="passw">Password:</Label>
            <section className='paswordContentAuth'>
                <Input
                    type={showPassword ? "text" : "password"}
                    id="passw"
                    variant="inputFormRegSig"
                    placeholder="password..."
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />

                <Image
                    variant="xSmallImg"
                    title={showPassword ? "Hide password" : "Show password"}
                    src={showPassword ? HidePassword : ShowPassword}
                    onClick={() => setShowPassword(prev => !prev)}
                />
            </section>

            {/* BUTTON SECTION */}
            <section className='bottonFormSection'>

                <Button
                    variant="loginBtn"
                    icon={iconSingIn}
                    iconPosition="left"
                >
                    {isRegister ? "Create Account" : "Log In"}
                </Button>

                <span className='dividerText'>Or:</span>

                {isRegister ? (
                    <Navigation to="/signin">
                        <Button variant="createAcc">
                            Already have an account?
                        </Button>
                    </Navigation>
                ) : (
                    <Navigation to="/registration">
                        <Button variant="createAcc">
                            Create a New Account
                        </Button>
                    </Navigation>
                )}

            </section>

        </Form>
    )
}

export default AuthForm
