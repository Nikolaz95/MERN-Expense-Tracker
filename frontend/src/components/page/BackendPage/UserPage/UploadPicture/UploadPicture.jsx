import React from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import UserInfoLayout from '../LayoutUI/UserInfoLayout'
import Image from '../../../../layouts/Images/Image'
import Button from '../../../../layouts/Buttons/Button'
import titleName from '../../../../hooks/useTitle';



//import css
import "./UploadPicture.css"
import { CancelUpdate, SaveUpdate, UploadCamera } from '../../../../../assets/Icons'
import { DefoultProfile } from '../../../../../assets/SideBarIcons'

const UploadPicture = () => {
    titleName('Update Picture', UploadCamera);

    return (
        <DashBoardLayout>
            <h1>Upload Picture</h1>
            <UserInfoLayout>
                <section className='userUploadContent'>
                    <form action="" className="userUpload-info" /* onSubmit={submitHandler} */>
                        <div className="userUpload-top">
                            <Image variant="icon" src={DefoultProfile} alt="avatar Default" className='userUpload-Profileimg' />
                            <input type="file" name='file'
                                id='file'
                                accept="images/*"
                            />
                            <label htmlFor="file" className='userUpload-BtnUplFile'>
                                <Image src={UploadCamera} variant="icon" title='Change picture' alt="chose a picture" className='userUpload-camera' />
                            </label>
                        </div>
                        <div className="userUpload-Btns">
                            <Button icon={SaveUpdate}>
                                Save Upload
                                {/* {isLoading ? "Uploading..." : "Save Upload"} */}
                            </Button>
                            <Button icon={CancelUpdate}> cancel
                                {/*  <Image variant="icon" src={CancelUpdate} className="iconBtns" />
                                Cancel */}
                            </Button>
                        </div>
                    </form>
                </section>

            </UserInfoLayout>

        </DashBoardLayout>
    )
}

export default UploadPicture
