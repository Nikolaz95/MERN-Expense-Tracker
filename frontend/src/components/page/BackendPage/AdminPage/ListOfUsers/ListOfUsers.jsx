import React, { useState } from 'react'
import DashBoardLayout from '../../Layouts/DashBoardLayout'
import titleName from '../../../../hooks/useTitle';

import styled from "styled-components";
import Table from '../../../../layouts/Table/Table';


/* data tableColums*/
import listOfUsersData from '../../../../data/UserData';
import { userColumns } from '../../../../layouts/Table/TableColumns/UserColumns';
import PaginationComponent from '../../../../layouts/Pagination/PaginationComponent';
import { UserList } from '../../../../../assets/SideBarIcons';



/* styled css */

const ListOfUsersSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    height: 100%;
`;


const ListOfUsers = () => {
    titleName(`List Of Users`, UserList)
    const [currentUsers, setCurrentUsers] = useState([]);
    return (
        <DashBoardLayout>
            <ListOfUsersSection>
                <h1>List Of Users : {listOfUsersData.length}</h1>
                <section className='listOfUsersTableSection'>
                    <Table
                        noDataText="There is no user register yet !"
                        // VAŽNO: Ovdje ide state, a ne originalni podaci!
                        data={currentUsers}
                        columns={userColumns}
                    />

                </section>

                <section className='listOfUsersPagination'>
                    <PaginationComponent
                        data={listOfUsersData}
                        itemsPerPage={10}
                        onPageData={setCurrentUsers}
                    />
                </section>
            </ListOfUsersSection>
        </DashBoardLayout>
    )
}

export default ListOfUsers