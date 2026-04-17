import { useState } from "react";

const useTransactionModal = () => {
    const [activeModal, setActiveModal] = useState("");
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // OPEN Add Income
    const openAddIncomeModal = () => {
        setActiveModal("addIncome");
    };

    // OPEN INFO
    const openInfoModal = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("info");
    };

    // OPEN DELETE
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
        openInfoModal,
        openDeleteModal,
        closeModal
    };
};

export default useTransactionModal;