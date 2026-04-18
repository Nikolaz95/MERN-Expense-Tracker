import { useState } from "react";

const useTransactionModal = () => {
    const [activeModal, setActiveModal] = useState("");
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // OPEN Add Income Modal
    const openAddIncomeModal = () => {
        setActiveModal("addIncome");
    };

    // OPEN Expens Modal
    const openAddExpenseModal = () => {
        setActiveModal("addExpense");
    };

    // OPEN INFO Modal
    const openInfoModal = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("info");
    };

    // OPEN DELETE Modal 
    const openDeleteModal = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("delete");
    };

    // CLOSE MODAL
    const closeModal = () => {
        setActiveModal("");
        setSelectedTransaction(null);
    };

    return {
        activeModal,
        selectedTransaction,
        openAddIncomeModal,
        openAddExpenseModal,
        openInfoModal,
        openDeleteModal,
        closeModal
    };
};

export default useTransactionModal;