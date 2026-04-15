import React from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import Button from '../../../../layouts/Buttons/Button'
import Image from '../../../../layouts/Images/Image'
import titleName from '../../../../hooks/useTitle';



//import css
import "./UpdateProfile.css"
import { UserSettings } from '../../../../../assets/SideBarIcons'
import { iconUpdate } from '../../../../../assets/BtnIcons'
import UserInfoLayout from '../LayoutUI/UserInfoLayout';

const UpdateProfile = () => {

    titleName('Update Profile', iconUpdate);

    const user = {
        name: "nikola",
        role: "admin",
        email: "nikolajoe@gmail.com",
        createdAt: "2026-04-15",
    }
    return (
        <DashBoardLayout>
            <h1>Update Profile</h1>
            <UserInfoLayout>
                <main className='formMain'>
                    <h1>Update Your Profile:</h1>
                    <form className="formContentUpdateProfile"  >
                        <label htmlFor="name_field" className="formLabel">
                            Name:
                        </label>
                        <input type="text" id="name_field"
                            className="form-control" placeholder='fakeUserName'
                            value={user.name}
                        />
                        <label htmlFor="email_field" className="form-label">
                            Email:
                        </label>
                        <input type="email" placeholder='fake@email.com'
                            value={user.email}
                            id="email_field" className="form-control"
                            name="email" />
                        <div className="btn-updateProfileSeting">
                            <Button
                                variant="updateProfile"
                                icon={iconUpdate}
                                iconPosition='left'
                                 /* disabled={isLoading} */ >
                                {/* {isLoading ? "Updating..." : "Save Update"} */}Save Update
                            </Button>

                        </div>
                    </form>
                </main>
            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdateProfile
