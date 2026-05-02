import React from 'react'
import { useModal } from './ModalContext';
import Modal from '../../layouts/ModalComponent/Modal';
import IncomeExpenseModal from '../../layouts/ModalComponent/ModalLayouts/ModalContent/IncExp/IncomeExpenseModal';
import InfoTransactionModal from '../../layouts/ModalComponent/ModalLayouts/ModalContent/InfoTransactionModal/InfoTransactionModal';
import DeleteModal from '../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteModal/DeleteModal';
import UpdateProfileModal from '../../layouts/ModalComponent/UpdateProfileModal/UpdateProfileModal';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDeleteByUserAccountMutation, useDeleteUserByAdminMutation } from '../../../redux/api/userApi';


const GlobalModals = () => {
    const { activeModal, selectedTransaction, selectedUserId, closeModal } = useModal();

    const navigate = useNavigate();

    const [deleteByUserAccount, { isLoading }] = useDeleteByUserAccountMutation();
    const [deleteUserByAdmin] = useDeleteUserByAdminMutation();

    const confirmDeleteOwnAccount = async () => {
        try {
            // Call the backend API to delete the account
            await deleteByUserAccount().unwrap();
            // Show success message
            toast.success('Account has been deleted successfully');
            // Remove token from localStorage or sessionStorage
            localStorage.removeItem('token');

            closeModal();
            // Redirect to home page or login page
            navigate('/', { replace: true });
            window.location.reload(); // Optionally force a page reload to clear session data
        } catch (error) {
            toast.error(error?.data?.message || 'Failed to delete your account');
        }
        console.log("Korisnik obrisan:", selectedUserId);
    };

    const confirmDeleteByAdmin = async () => {
        try {
            await deleteUserByAdmin(selectedUserId).unwrap();

            toast.success("User deleted successfully");

            closeModal();

        } catch (error) {
            toast.error(error?.data?.message || "Delete failed");
        }
    };

    return (
        <>

            {/* modal add/expense Income */}
            <Modal isOpen={activeModal === "addIncome" || activeModal === "addExpense"} onClose={closeModal}>
                <IncomeExpenseModal
                    titleText={activeModal === "addIncome" ? "Add Income" : "Add Expense"}
                    underTitleText={activeModal === "addIncome"
                        ? "Choose a category to set an income budget."
                        : "Choose a category to set an expense budget."}
                    buttonText={activeModal === "addIncome" ? "Add Income" : "Add Expense"}
                    placholderText={activeModal === "addIncome" ? "Income Amount" : "Expense Amount"}
                    placholderTextDescription={activeModal === "addIncome"
                        ? "Description about your Income!"
                        : "Description about your Expense!"}
                    type={activeModal === "addIncome" ? "income" : "expense"}
                    onClose={closeModal}
                />
            </Modal>

            {/* modal Info Transaction */}
            <Modal isOpen={activeModal === "info"} onClose={closeModal}>
                <InfoTransactionModal
                    transaction={selectedTransaction}
                    onClose={closeModal}
                />
            </Modal>

            {/* modal delete Transaction */}
            <Modal isOpen={activeModal === "delete"} onClose={closeModal}>
                <DeleteModal
                    deleteTitleText="Are you sure you want to delete this transaction?"
                    underPText="This action cannot be undone."
                    transaction={selectedTransaction}
                    onClose={closeModal}
                />
            </Modal>


            {/* modal update users profile */}
            <Modal isOpen={activeModal === "updateAccount"} onClose={closeModal}>
                <UpdateProfileModal userId={selectedUserId} onClose={closeModal} />
            </Modal>

            {/* Modal Delete bySelf just User Account */}
            <Modal isOpen={activeModal === "deleteUserAccount"} onClose={closeModal}>
                <DeleteModal
                    deleteTitleText="Do you really wanna delete account?"
                    underPText={`Are you sure you want to delete user ?`}
                    underPText2="This action cannot be undone."
                    confirmDelete={confirmDeleteOwnAccount}
                    onClose={closeModal}
                />
            </Modal>


            {/* Modal Delete Account by Admin Section */}
            <Modal isOpen={activeModal === "deleteByAdminSection"} onClose={closeModal}>
                <DeleteModal
                    deleteTitleText="Do you really wanna delete account? admin"
                    underPText={`Are you sure you want to delete user ?`}
                    underPText2="This action cannot be undone."
                    confirmDelete={confirmDeleteByAdmin}
                    onClose={closeModal}
                />
            </Modal>

        </>
    )
}

export default GlobalModals