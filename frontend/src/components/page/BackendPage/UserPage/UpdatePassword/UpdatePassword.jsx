import React, { useEffect, useState } from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import UserInfoLayout from '../LayoutUI/UserInfoLayout'
import Button from '../../../../layouts/Buttons/Button'
import titleName from '../../../../hooks/useTitle';
import toast from 'react-hot-toast';

//import css
import "./UpdatePassword.css"
import { iconUpdate } from '../../../../../assets/BtnIcons';
import { useUpdatePasswordMutation } from '../../../../../redux/api/userApi';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    titleName('Update Password', iconUpdate);
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");

    const [updatePassword, { isLoading, error, isSuccess }] =
        useUpdatePasswordMutation();

    useEffect(() => {
        if (error) {
            toast.error(error?.data?.message);
        }

        if (isSuccess) {
            toast.success("Password Updated");
            navigate("/user/settings-Profile");
        }
    }, [error, isSuccess]);

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            oldPassword,
            password,
        };

        updatePassword(userData);
    };


    return (
        <DashBoardLayout>
            <h1>Update Password</h1>
            <UserInfoLayout>

                <section className="updatePasswordSection">
                    <h1>Update Password:</h1>
                    <form className="formUpdatePassword" onSubmit={submitHandler}>
                        <label htmlFor="name_field" className="form-label">Old Password:</label>
                        <input
                            type="password"
                            id="name_field"
                            placeholder='user password'
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="form-control"
                            name="name" />
                        <label htmlFor="email_field" className="form-label">New Password:</label>
                        <input
                            type="password"
                            id="email_field"
                            placeholder='user new password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            name="email" />
                        <Button
                            icon={iconUpdate}
                            variant="updatePassword" disabled={isLoading}>
                            {isLoading ? "Updating..." : "Update Password"}
                        </Button>
                    </form>
                </section>

            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdatePassword
