import React, { useState } from 'react'
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import titleName from '../../../../hooks/useTitle';
import { ExpensesTitleIcon } from '../../../../../assets/IconTitle';


// import data
import transitionData from '../../../../data/TransactionData';
import IncomExpensLayout from '../../Layouts/UserExpenseLayout/IncomExpensLayout';
import IncomeExpenseModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/IncExp/IncomeExpenseModal';
import Modal from '../../../../layouts/ModalComponent/Modal';
import useTransactionModal from '../../../../hooks/useModal';
import InfoTransactionModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/InfoTransactionModal/InfoTransactionModal';
import DeleteModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteModal/DeleteModal';
import { useModal } from '../../../../context/modals/ModalContext';
import { useTransaction } from '../../../../context/TransactionContext/TransactionContext';

const UserExpasePage = () => {
    titleName('User Expase Page', ExpensesTitleIcon);
    const user = {
        id: 1,
        userName: "Nikola",
    }

    const expenseOnlyData = transitionData.filter(item => item.type === 'expense');

    const { expenseDataStore } = useTransaction();

    // ← SAMO OVO, bez useState, bez starih hookova
    const { openAddExpenseModal, openInfoModal, openDeleteModal, } = useModal();

    return (
        <>
            <UserExpenseLayout icon={ExpensesTitleIcon}>
                <IncomExpensLayout titleText="Expense Overview"
                    descriptionText={`${user.userName}, here is your expense Overview`}
                    buttonText="Add expense"

                    openModalAddIncome={openAddExpenseModal}
                    openModalInfoTransaction={openInfoModal}
                    openModalDeleteTransaction={openDeleteModal}

                    chartTitle="Expense Statistics"
                    dataStore={expenseDataStore}
                    themeColor="#ba2626"
                    tableTitle="Expense History"
                    fullData={expenseOnlyData} />
            </UserExpenseLayout>
        </>
    )
}

export default UserExpasePage
