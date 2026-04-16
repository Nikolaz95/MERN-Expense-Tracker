import React, { useState } from 'react'
import { IncomeTitleIcon } from '../../../../../assets/IconTitle';
import useTitle from '../../../../hooks/useTitle';

// import components
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import IncomExpensLayout from '../../Layouts/UserExpenseLayout/IncomExpensLayout';

// import data
import transitionData from '../../../../data/TransactionData';
import Modal from '../../../../layouts/ModalComponent/Modal';
import Modal1 from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/Modal1';
import IncomeExpenseModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/IncExp/IncomeExpenseModal';
import DeleteModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteModal/DeleteModal';

const UserIncomsPage = () => {
    useTitle('User Income Page', IncomeTitleIcon);
    const incomeOnlyData = transitionData.filter(item => item.type === 'income');

    // Samo podaci koji su specifični za Income
    const incomeDataStore = {
        '7days': {
            labels: ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'],
            values: [120, 190, 300, 500, 220, 340, 410],
        },
        'month': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            values: [1200, 1900, 1500, 2100, 1200, 1900, 1500, 2100, 1200, 1900, 1500, 2100],
        },
        'year': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            years: [
                { label: '2026', values: [500, 600, 700, 550, 800, 750, 500, 600, 700, 550, 800, 750] },
                { label: '2027', values: [650, 720, 800, 600, 950, 1100, 650, 720, 800, 600, 950, 1100] }
            ]
        }
    };

    const user = {
        id: 1,
        userName: "Nikola",
    }

    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    // Function to close the modal
    const closeModal = () => {
        setActiveModal("");
    };

    const openModalAddIncome = () => {
        setActiveModal("content");
    };

    const openModalDeleteTransaction = (transaction) => {
        setSelectedTransaction(transaction);
        setActiveModal("deleteTransaction");
    };

    return (
        <>
            <UserExpenseLayout icon={IncomeTitleIcon}>
                <IncomExpensLayout titleText="Income Overview"
                    descriptionText={`${user.userName}, here is your income Overview`}
                    buttonText="Add Income"
                    openModalAddIncome={openModalAddIncome}
                    openModalDeleteTransaction={openModalDeleteTransaction}
                    chartTitle="Income Statistics"
                    dataStore={incomeDataStore}
                    themeColor="#4CAF50"
                    tableTitle="Income History"
                    fullData={incomeOnlyData} />
            </UserExpenseLayout>

            {/* Modal for add IncomeExpenseModal */}
            <Modal isOpen={activeModal === "content"} onClose={closeModal}>
                <IncomeExpenseModal
                    titleText="Add Income"
                    underTitleText="Choose a category to set a income budget. These categories can help you monitor spending."
                    buttonText="Add Income"
                    placholderText="Income Amount"
                    placholderTextDescription="Description about your Income !"
                    type="income"
                    onClose={closeModal} />
            </Modal>

            {/* Modal Delete */}
            <Modal isOpen={activeModal === "deleteTransaction"} onClose={closeModal}>
                <DeleteModal
                    deleteTitleText="Do you really wanna delete this transaction ?"
                    underPText={`Are you sure you want to his transaction ?`}
                    underPText2="This action cannot be undone."
                    /* onConfirm={confirmDelete} */ // Proslijedi funkciju za brisanje!
                    onClose={closeModal}
                />
            </Modal>
        </>
    )
}


export default UserIncomsPage
