import React, { useState } from 'react'
import { IncomeTitleIcon } from '../../../../../assets/IconTitle';
import useTitle from '../../../../hooks/useTitle';

// import components
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import IncomExpensLayout from '../../Layouts/UserExpenseLayout/IncomExpensLayout';

// import data
import Modal from '../../../../layouts/ModalComponent/Modal';
import Modal1 from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/Modal1';
import IncomeExpenseModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/IncExp/IncomeExpenseModal';
import DeleteModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteModal/DeleteModal';
import InfoTransactionModal from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/InfoTransactionModal/InfoTransactionModal';
import useTransactionModal from '../../../../hooks/useModal';
import { useModal } from '../../../../context/modals/ModalContext';
import { useTransaction } from '../../../../context/TransactionContext/TransactionContext';
import { useGetUserTransactionsListQuery } from '../../../../../redux/api/transactionsApi';
import { useSelector } from 'react-redux';

const UserIncomsPage = () => {
    useTitle('User Income Page', IncomeTitleIcon);
    const { user } = useSelector((state) => state.auth);
    console.log(user);

    const { data, isLoading } = useGetUserTransactionsListQuery();
    const transitionData = data?.userTransactionList || [];

    const incomeOnlyData = transitionData.filter(
        item => item.type === "income"
    );
    const { incomeDataStore } = useTransaction()

    // ← SAMO OVO, bez useState, bez starih hookova
    const { openAddIncomeModal, openInfoModal, openDeleteModal } = useModal();

    return (
        <>
            <UserExpenseLayout icon={IncomeTitleIcon}>
                <IncomExpensLayout
                    titleText="Income Overview"
                    descriptionText={`${user?.name}, here is your income Overview`}
                    buttonText="Add Income"

                    // ✅ OVO JE KLJUČ
                    openModalAddIncome={openAddIncomeModal}
                    openModalInfoTransaction={openInfoModal}
                    openModalDeleteTransaction={openDeleteModal}

                    chartTitle="Income Statistics"
                    dataStore={incomeDataStore}
                    themeColor="#4CAF50"
                    tableTitle="Income History"
                    fullData={incomeOnlyData} />
            </UserExpenseLayout>
        </>
    )
}


export default UserIncomsPage
