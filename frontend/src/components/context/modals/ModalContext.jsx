import React, { createContext, useContext, useState } from 'react'


const ModalContext = createContext(null);


export const ModalProvider = ({ children }) => {
    const [activeModal, setActiveModal] = useState("");
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const openAddIncomeModal = () => setActiveModal("addIncome");
    const openAddExpenseModal = () => setActiveModal("addExpense");

    const openInfoModal = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("info");
    };

    const openDeleteModal = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("delete");
    };

    const openUpdateUserModal = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("updateAccount");
    };

    const openDeleteUserModal = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("deleteUserAccount");
    };

    const openDeleteUsersByAdminModal = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("deleteByAdminSection");
    };

    const closeModal = () => {
        setActiveModal("");
        setSelectedTransaction(null);
    };

    return (
        <ModalContext.Provider value={{
            activeModal,
            selectedTransaction,
            selectedUserId,
            openAddIncomeModal,
            openAddExpenseModal,
            openInfoModal,
            openDeleteModal,
            openUpdateUserModal,
            openDeleteUserModal,
            openDeleteUsersByAdminModal,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
