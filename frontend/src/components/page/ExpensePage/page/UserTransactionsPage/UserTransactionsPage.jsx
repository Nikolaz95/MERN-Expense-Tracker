import React, { useMemo, useState } from 'react'
import UserExpenseLayout from '../../Layouts/UserExpenseLayout/UserExpenseLayout'
import titleName from '../../../../hooks/useTitle';
import { TransactionsTitleIcon } from '../../../../../assets/IconTitle';


//import css
import "./UserTransactionsPage.css";
import SortBy from '../../../../layouts/SortBy/SortBy';
import FilterCategory from '../../../../layouts/FilterCategory/FilterCategory';

// import data
import transitionData from '../../../../data/TransactionData';
import PaginationComponent from '../../../../layouts/Pagination/PaginationComponent';
import Table from '../../../../layouts/Table/Table';
import { transactionColumns } from '../../../../layouts/Table/TableColumns/TransactionColumns';
import SearchForm from '../../../../layouts/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { sortTransactions } from '../../../../constants/sortOptions';
import transitionAllData from '../../../../data/TransactionData';
import { useModal } from '../../../../context/modals/ModalContext';


const UserTransactionsPage = () => {
    titleName('User Transactions Page', TransactionsTitleIcon);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentTrans, setCurrentTrans] = useState([]);

    const search = searchParams.get("search") || "";

    const sortBy = searchParams.get("sortBy") || "date-desc";

    const category = searchParams.get("category") || "all";

    const sortedData = useMemo(() => {
        let filtered = transitionData;

        if (category !== "all")
            filtered = filtered.filter(t => t.category === category);

        if (search)
            filtered = filtered.filter(t =>
                t.recipient.toLowerCase().includes(search.toLowerCase())
            );

        return sortTransactions(filtered, sortBy);
    }, [sortBy, category, search]);

    function handleSortChange(value) {
        searchParams.set("sortBy", value);
        setSearchParams(searchParams);
    }

    // ← SAMO OVO, bez useState, bez starih hookova
    const { openInfoModal, openDeleteModal } = useModal();

    const handleInfo = (row) => {
        console.log("INFO TRANSACTION:", row);
        openInfoModal(row);
    };

    const handleDelete = (row) => {
        console.log("DELETE TRANSACTION:", row);
        openDeleteModal(row);
    };

    const columns = transactionColumns(handleInfo, handleDelete);

    return (
        <>
            <UserExpenseLayout icon={TransactionsTitleIcon}>
                <main className='mainContentTransactionSection'>
                    <h1>Transactions ({sortedData.length})</h1>
                    <section className='transactionSection'>
                        <section className='transactionSectionTop'>
                            <section className='transactionSectionTopRight'>
                                <SearchForm />
                            </section>
                            <section className='transactionSectionTopLeft'>
                                <SortBy value={sortBy} onChange={handleSortChange} />
                                <FilterCategory />
                            </section>
                        </section>

                        <section className='transactionSectionMiddle'>
                            <h1>All Transactions :</h1>
                            <Table
                                noDataText="No transactions found for this category yet !"
                                data={currentTrans}
                                columns={columns} />

                            <PaginationComponent
                                data={sortedData}
                                itemsPerPage={10}
                                onPageData={setCurrentTrans}
                            />
                        </section>
                    </section>
                </main>

            </UserExpenseLayout>
        </>
    )
}

export default UserTransactionsPage
