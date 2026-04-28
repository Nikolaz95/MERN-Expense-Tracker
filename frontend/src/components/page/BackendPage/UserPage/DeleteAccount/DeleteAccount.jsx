import React, { useState } from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import titleName from '../../../../hooks/useTitle';


//import css
import "./DeleteAccount.css"
import UserInfoLayout from '../LayoutUI/UserInfoLayout';
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';
import { DefoultProfile } from '../../../../../assets/SideBarIcons';
import { iconDelete } from '../../../../../assets/BtnIcons';
import Modal from '../../../../layouts/ModalComponent/Modal';
import DeleteModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteModal/DeleteModal';
import { useModal } from '../../../../context/modals/ModalContext';
import useAuthBtnFunction from '../../../../hooks/useAuthBtnFunction';


const DeleteAccount = () => {
    titleName('Delete Account', iconDelete);
    const { user, handleLogOut } = useAuthBtnFunction();
    // ← SAMO OVO, bez useState, bez starih hookova
    const { openDeleteUserModal } = useModal();

    const [selectedUserId, setSelectedUserId] = useState(null);


    const handleDeleteClick = (userId) => {
        setSelectedUserId(userId);
        openDeleteUserAccModal();
    };


    return (
        <DashBoardLayout>
            <h1>Delete Account</h1>
            <UserInfoLayout>
                <section className='deleteAccountContent'>
                    <div className="deleteAccountContainer">
                        <div className="deleteAccountTop">
                            <Image variant='profile' src={
                                user?.avatar ? user?.avatar?.url : DefoultProfile
                            }
                                alt="" title="Your Profil picture"
                                className='deleteAccountImg' />
                        </div>
                        <div className="deleteAccountBottom">
                            <div className="deleteAccountName">
                                <h1>Full Name:</h1>
                                <p>{user.name}</p>
                            </div>
                            <div className="deleteAccountEmail">
                                <h1>Email:</h1>
                                <p>{user.email}</p>
                            </div>
                            <div className="deleteAccountBtnDelete">
                                <Button onClick={() => openDeleteUserModal(user._id)}
                                    variant="deleteAccount" icon={iconDelete}
                                    title="Delete Account">
                                    Delete Account
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </UserInfoLayout>

            {/* Modal for delete modal */}
            {/* <Modal isOpen={activeModal === "deleteAccountUser"} onClose={closeModal}>
                <DeleteModal onClose={closeModal}  />
            </Modal> */}
        </DashBoardLayout>
    )
}

export default DeleteAccount
