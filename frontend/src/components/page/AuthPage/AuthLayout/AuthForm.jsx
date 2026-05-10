import React, { useEffect, useState } from 'react'
import Image from '../../../layouts/Images/Image'
import { HidePassword, ShowPassword } from '../../../../assets/Icons'
import Button from '../../../layouts/Buttons/Button'
import { iconSingIn } from '../../../../assets/BtnIcons'
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation'
import Form from '../../../layouts/FormComponents/FormWrapper/Form'
import Label from '../../../layouts/FormComponents/FormWrapper/Label/Label'
import Input from '../../../layouts/FormComponents/FormWrapper/Input/Input'
import { useLoginMutation, useRegisterMutation } from '../../../../redux/api/authApi'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthForm = ({ type }) => {
    const isRegister = type === "register";
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    // 1. KORISTI ALIASE (NADIMKE) ZA VARIJABLE
    const [login, { isLoading: isLoginLoading, error: loginError, data: loginData }] = useLoginMutation();
    const [register, { isLoading: isRegLoading, error: regError, data: regData }] = useRegisterMutation();

    // Spojimo ih u zajedničke konstante radi lakšeg korišćenja u JSX-u
    const isLoading = isLoginLoading || isRegLoading;
    const error = loginError || regError;
    const data = loginData || regData;


    console.log("====================");
    console.log("logIn data", loginData);
    console.log("====================");


    console.log("====================");
    console.log("register data", regData);
    console.log("====================");

    const { isAuthenticated, user } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/user/settings-Profile");
            const userName = user?.name || "User";
            toast.success(`Welcome back, ${userName}!`);
        }
        if (error) {
            console.log("ERROR FULL:", error);
            toast.error(error?.data?.message || "Login failed");
        }
    }, [isAuthenticated, error]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isRegister) {

            const singUpData = {
                name: formData.username,
                email: formData.email,
                password: formData.password,
            };
            console.log("PODACI IZ REGISTRACIJE:", singUpData);

            register(singUpData);

        }

        else {
            const loginData = {
                email: formData.email,
                password: formData.password,
            };

            login(loginData);
        }
    }


    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Form onSubmit={submitHandler}>

            {/* USERNAME SAMO ZA REGISTER */}
            {isRegister && (
                <>
                    <Label htmlFor="username">Your Username:</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        variant="inputFormRegSig"
                        placeholder="username..."
                        onChange={onChange}
                    />
                </>
            )}

            <Label htmlFor="mail">Your Email:</Label>
            <Input
                name="email"
                type="email"
                id="mail"
                variant="inputFormRegSig"
                placeholder="fake@email..."
                onChange={onChange}
            />

            <Label htmlFor="passw">Password:</Label>
            <section className='paswordContentAuth'>
                <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="passw"
                    variant="inputFormRegSig"
                    placeholder="password..."
                    onChange={onChange}
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

                <Button variant="loginBtn" icon={iconSingIn} iconPosition="left"
                    type="submit" disabled={isLoading}>
                    {isRegister
                        ? (isLoading ? "Creating..." : "Create a New Account")
                        : (isLoading ? "Authenticating..." : "Log In")
                    }
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
