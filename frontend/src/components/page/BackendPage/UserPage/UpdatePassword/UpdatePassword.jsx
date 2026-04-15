import React from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import UserInfoLayout from '../LayoutUI/UserInfoLayout'
import Button from '../../../../layouts/Buttons/Button'
import titleName from '../../../../hooks/useTitle';

//import css
import "./UpdatePassword.css"
import { iconUpdate } from '../../../../../assets/BtnIcons';

const UpdatePassword = () => {
    titleName('Update Password', iconUpdate);
    const user = {
        name: "nikola",
        role: "admin",
        email: "nikolajoe@gmail.com",
        createdAt: "2026-04-15",
        password: "123456"
    }
    return (
        <DashBoardLayout>
            <h1>Update Password</h1>
            <UserInfoLayout>

                <section className="updatePasswordSection">
                    <h1>Update Password:</h1>
                    <form className="formUpdatePassword" /* onSubmit={submitHandler} */>
                        <label htmlFor="name_field" className="form-label">Old Password:</label>
                        <input
                            type="password"
                            id="name_field"
                            placeholder='user password'
                            /* value={oldPassword} */
                            /* onChange={(e) => setOldPassword(e.target.value)} */
                            className="form-control"
                            name="name" />
                        <label htmlFor="email_field" className="form-label">New Password:</label>
                        <input
                            type="password"
                            id="email_field"
                            placeholder='user new password'
                            value={user.password}
                            /* onChange={(e) => setPassword(e.target.value)} */
                            className="form-control"
                            name="email" />
                        <Button
                            icon={iconUpdate}
                            variant="updatePassword" /* disabled={isLoading} */>
                            {/* <Image variant="icon" src={SaveUpdate} className="iconBtns" /> */}
                            Update Password
                            {/* {isLoading ? "Updating..." : "Update Password"} */}
                        </Button>
                    </form>
                </section>

            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdatePassword
