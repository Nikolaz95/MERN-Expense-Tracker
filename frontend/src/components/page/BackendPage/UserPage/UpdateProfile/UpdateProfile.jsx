import React, { useEffect, useState } from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import Button from '../../../../layouts/Buttons/Button'
import Image from '../../../../layouts/Images/Image'
import titleName from '../../../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import { UserSettings } from '../../../../../assets/SideBarIcons'
import { iconUpdate } from '../../../../../assets/BtnIcons'
import UserInfoLayout from '../LayoutUI/UserInfoLayout';
import { useUpdateProfileMutation } from '../../../../../redux/api/userApi';
import { useSelector } from 'react-redux';



//import css
import "./UpdateProfile.css"
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    titleName('Update Profile', iconUpdate);

    const navigate = useNavigate();
    const [updateProfile, { isLoading, error, isSuccess }] = useUpdateProfileMutation();
    const { user } = useSelector((state) => state.auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            setName(user?.name);
            setEmail(user?.email);
        }
        if (isSuccess) {
            toast.success("User Updated")
            navigate("/user/settings-Profile");
        }

        if (error) {
            toast.error(error?.data?.message);
        }
    }, [user, error, isSuccess]);

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
        };

        updateProfile(userData);
    };


    return (
        <DashBoardLayout>
            <h1>Update Profile</h1>
            <UserInfoLayout>
                <main className='formMain'>
                    <h1>Update Your Profile:</h1>
                    <form className="formContentUpdateProfile" onSubmit={submitHandler}>
                        <label htmlFor="name_field" className="formLabel">
                            Name:
                        </label>
                        <input type="text" id="name_field"
                            className="form-control" placeholder='fakeUserName'
                            value={name}
                            onChange={(e) => setName(e.target.value)} name="name"
                        />
                        <label htmlFor="email_field" className="form-label">
                            Email:
                        </label>
                        <input type="email" placeholder='fake@email.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email_field" className="form-control"
                            name="email" />
                        <div className="btn-updateProfileSeting">
                            <Button
                                variant="updateProfile"
                                icon={iconUpdate}
                                iconPosition='left'
                                disabled={isLoading} >
                                {isLoading ? "Updating..." : "Save Update"}
                            </Button>

                        </div>
                    </form>
                </main>
            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdateProfile
