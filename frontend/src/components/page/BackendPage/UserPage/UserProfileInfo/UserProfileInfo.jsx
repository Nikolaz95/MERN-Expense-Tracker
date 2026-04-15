import React from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import titleName from '../../../../hooks/useTitle';

//import css
import "./UserProfileInfo.css"
import { DefoultProfile, LogOut, UserIcon } from '../../../../../assets/SideBarIcons'
import Image from '../../../../layouts/Images/Image'
import UserInfoLayout from '../LayoutUI/UserInfoLayout';

const UserProfileInfo = () => {
    titleName('Profile Info', UserIcon);

    const user = {
        name: "nikola",
        role: "admin",
        email: "nikolajoe@gmail.com",
        createdAt: "2026-04-15",
    }
    return (
        <DashBoardLayout>
            <h1>Profile Info</h1>
            <UserInfoLayout>
                <div className="userProfileConteiner">
                    <div className="userProfileConteinerTop">
                        <Image src={
                            user?.avatar ? user?.avatar?.url : DefoultProfile
                        }
                            variant="profile"
                            className='userProfileImg' alt="userImg" />
                    </div>
                    <div className="userProfileConteinerBottom">
                        <div className="userProfileNameContent">
                            <h1>Full Name:</h1>
                            <p>{user?.name}</p>
                        </div>
                        <div className="userProfileEmailContent">
                            <h1>Email:</h1>
                            <p>{user?.email}</p>
                        </div>
                        <div className="userProfileJoinedContent">
                            <h1>Joined On:</h1>
                            <p>{user?.createdAt?.substring(0, 10)}</p>
                        </div>
                    </div>
                </div>
            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UserProfileInfo
