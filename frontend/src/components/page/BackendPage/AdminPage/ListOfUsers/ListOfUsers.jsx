import React, { useState } from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import titleName from '../../../../hooks/useTitle';

import styled from "styled-components";
import Table from '../../../../layouts/Table/Table';


/* data tableColums*/
import listOfUsersData from '../../../../data/UserData';
import { userColumns } from '../../../../layouts/Table/TableColumns/UserColumns';
import PaginationComponent from '../../../../layouts/Pagination/PaginationComponent';
import { UserList } from '../../../../../assets/SideBarIcons';
import UpdateProfileModal from '../../../../layouts/ModalComponent/UpdateProfileModal/UpdateProfileModal';
import Modal from '../../../../layouts/ModalComponent/Modal';

import DeleteModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteModal/DeleteModal';



/* styled css */

const ListOfUsersSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    height: 100%;
`;


const ListOfUsers = () => {
    titleName(`List Of Users`, UserList)
    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [currentUsers, setCurrentUsers] = useState([]);

    const closeModal = () => {
        setActiveModal("");
        setSelectedUserId(null);
    };

    const handleUpdateClick = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("updateAccount");
    };

    const handleDeleteClick = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("deleteUserAccount");
    };

    const columns = userColumns(handleUpdateClick, handleDeleteClick);

    // Simulacija brisanja za UI test
    const confirmDelete = () => {
        console.log("Korisnik obrisan:", selectedUserId);
        closeModal();
    };


    return (
        <DashBoardLayout>
            <ListOfUsersSection>
                <h1>List Of Users : {listOfUsersData.length}</h1>
                <section className='listOfUsersTableSection'>
                    <Table
                        noDataText="There is no user register yet !"
                        data={currentUsers}
                        columns={columns}
                    />

                </section>

                <section className='listOfUsersPagination'>
                    <PaginationComponent
                        data={listOfUsersData}
                        itemsPerPage={10}
                        onPageData={setCurrentUsers}
                    />
                </section>
            </ListOfUsersSection>


            {/* modal update users profile */}
            <Modal isOpen={activeModal === "updateAccount"} onClose={closeModal}>
                <UpdateProfileModal userId={selectedUserId} onClose={closeModal} />
            </Modal>

            {/* Modal Delete */}
            <Modal isOpen={activeModal === "deleteUserAccount"} onClose={closeModal}>
                <DeleteModal
                    deleteTitleText="Do you really wanna delete account?"
                    underPText={`Are you sure you want to delete user ?`}
                    underPText2="This action cannot be undone."
                    onConfirm={confirmDelete} // Proslijedi funkciju za brisanje!
                    onClose={closeModal}
                />
            </Modal>
        </DashBoardLayout>
    )
}

export default ListOfUsers