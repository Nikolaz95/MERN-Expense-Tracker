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
import DeleteAccountModalUser from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteAccountModal/DeleteAccountModalUser';


const DeleteAccount = () => {
    titleName('Delete Account', iconDelete);
    const user = {
        name: "nikola",
        role: "admin",
        email: "nikolajoe@gmail.com",
        createdAt: "2026-04-15",
        password: "123456"
    }

    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");

    // Function to close the modal
    const closeModal = () => setActiveModal("");
    return (
        <DashBoardLayout>
            <h1>Delete Account</h1>
            <UserInfoLayout>
                <section className='deleteAccountContent'>
                    <div className="deleteAccountContainer">
                        <div className="deleteAccountTop">
                            <Image variant='profile' src={DefoultProfile} /* src={
                                user?.avatar ? user?.avatar?.url : AvatarDefault
                            } */
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
                                <Button onClick={() => setActiveModal("deleteAccountUser")}
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
            <Modal isOpen={activeModal === "deleteAccountUser"} onClose={closeModal}>
                <DeleteAccountModalUser onClose={closeModal} /* userId={selectedUserId} */ />
            </Modal>
        </DashBoardLayout>
    )
}

export default DeleteAccount
