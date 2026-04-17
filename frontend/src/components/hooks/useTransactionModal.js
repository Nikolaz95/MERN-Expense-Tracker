import { useState } from "react";

const useTransactionModal = () => {
    const [activeModal, setActiveModal] = useState("");
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // OPEN INFO
    const openInfo = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("info");
    };

    // OPEN DELETE
    const openDelete = (transaction) => {
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
        openInfo,
        openDelete,
        closeModal
    };
};

export default useTransactionModal;