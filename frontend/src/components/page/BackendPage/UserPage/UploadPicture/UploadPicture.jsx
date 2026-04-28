import React, { useEffect, useState } from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import UserInfoLayout from '../LayoutUI/UserInfoLayout'
import Image from '../../../../layouts/Images/Image'
import Button from '../../../../layouts/Buttons/Button'
import titleName from '../../../../hooks/useTitle';
import toast from 'react-hot-toast';



//import css
import "./UploadPicture.css"
import { CancelUpdate, SaveUpdate, UploadCamera } from '../../../../../assets/Icons'
import { DefoultProfile } from '../../../../../assets/SideBarIcons'
import { useSelector } from 'react-redux'
import { useUploadAvatarMutation } from '../../../../../redux/api/userApi'
import { useNavigate } from 'react-router-dom'

const UploadPicture = () => {
    titleName('Update Picture', UploadCamera);
    const navigate = useNavigate();
    const [uploadAvatar, { isLoading, error, isSuccess }] = useUploadAvatarMutation();
    const { user } = useSelector((state) => state.auth);
    const [avatar, setAvatar] = useState("");

    const [avatarPreview, setAvatarPreview] = useState(
        user?.avatar ? user?.avatar?.url : DefoultProfile
    );

    useEffect(() => {
        if (error) {
            toast.error(error?.data?.message);
        }

        if (isSuccess) {
            toast.success("Avatar Uploaded");
            navigate("/user/settings-Profile");
        }
    }, [error, isSuccess]);

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            avatar,
        };
        console.log("========================");
        console.log(userData);
        console.log("========================");


        uploadAvatar(userData);
    };

    const onChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <DashBoardLayout>
            <h1>Upload Picture</h1>
            <UserInfoLayout>
                <section className='userUploadContent'>
                    <form action="" className="userUpload-info" onSubmit={submitHandler}>
                        <div className="userUpload-top">
                            <Image variant="icon" src={avatarPreview} alt="avatar Default" className='userUpload-Profileimg' title={user.name} />
                            <input type="file" name='file'
                                id='file'
                                accept="images/*"
                                onChange={onChange}
                            />
                            <label htmlFor="file" className='userUpload-BtnUplFile'>
                                <Image src={UploadCamera} variant="icon" title='Change picture' alt="chose a picture" className='userUpload-camera' />
                            </label>
                        </div>
                        <div className="userUpload-Btns">
                            <Button icon={SaveUpdate} disabled={isLoading}>
                                {isLoading ? "Uploading..." : "Save Upload"}
                            </Button>
                            <Button icon={CancelUpdate}> Cancel

                            </Button>
                        </div>
                    </form>
                </section>

            </UserInfoLayout>

        </DashBoardLayout>
    )
}

export default UploadPicture
