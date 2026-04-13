import React, { useState } from 'react'
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import titleName from '../../../../hooks/useTitle';
import { ExpensesTitleIcon } from '../../../../../assets/IconTitle';


// import data
import transitionData from '../../../../data/TransactionData';
import IncomExpensLayout from '../../Layouts/UserExpenseLayout/IncomExpensLayout';
import IncomeExpenseModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/IncExp/IncomeExpenseModal';
import Modal from '../../../../layouts/ModalComponent/Modal';
const UserExpasePage = () => {
    const user = {
        id: 1,
        userName: "Nikola",
    }

    const expenseOnlyData = transitionData.filter(item => item.type === 'expense');


    // Samo podaci koji su specifični za Income
    const expenseDataStore = {
        '7days': {
            labels: ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'],
            values: [-120, -190, -300, -500, -220, -340, -410],
        },
        'month': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            values: [-1200, -1900, -1500, -2100, -1200, -1900, -1500, -2100, -1200, -1900, -1500, -2100],
        },
        'year': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            years: [
                { label: '2026', values: [-500, -600, -700, -550, -800, -750, -500, -600, -700, -550, -800, -750] },
                { label: '2027', values: [-650, -720, -800, -600, -950, -1100, -650, -720, -800, -600, -950, -1100] }
            ]
        }
    };

    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    // Function to close the modal
    const closeModal = () => {
        setActiveModal("");
    };

    const openModal = () => {
        setActiveModal("content");
    };



    titleName('User Expase Page', ExpensesTitleIcon);
    return (
        <>
            <UserExpenseLayout icon={ExpensesTitleIcon}>
                <IncomExpensLayout titleText="Expense Overview"
                    descriptionText={`${user.userName}, here is your expense Overview`}
                    buttonText="Add expense"
                    onButtonClick={openModal}
                    chartTitle="Expense Statistics"
                    dataStore={expenseDataStore}
                    themeColor="#ba2626"
                    tableTitle="Expense History"
                    fullData={expenseOnlyData} />
            </UserExpenseLayout>

            {/* Modal for Text1 */}
            <Modal isOpen={activeModal === "content"} onClose={closeModal}>
                <IncomeExpenseModal
                    titleText="Add Expense"
                    underTitleText="Choose a category to set a expense budget. These categories can help you monitor spending."
                    buttonText="Add Expense"
                    placholderText="Expense Amount"
                    placholderTextDescription="Description about your expense !"
                    type="expense"
                    onClose={closeModal} />
            </Modal>
        </>
    )
}

export default UserExpasePage
