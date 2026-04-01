import React from 'react'
import styled from "styled-components";


const UserDashBoardTopSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid black;

    @media  screen and (max-width:1000px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px;
        
    
  }
`;

const UserDashBoardInfo = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
    @media  screen and (max-width:1000px) {
    
  }
`;


const DashBoardTopContent = () => {
    return (
        <UserDashBoardTopSection>
            <UserDashBoardInfo>
                <h1>Total Balance</h1>
                <p>$4,836.00</p>
            </UserDashBoardInfo>
            <UserDashBoardInfo>
                <h1>Total Income</h1>
                <p>$3,814.25</p>
            </UserDashBoardInfo>
            <UserDashBoardInfo>
                <h1>Total Expenses</h1>
                <p>$1,700.50</p>
            </UserDashBoardInfo>
        </UserDashBoardTopSection>
    )
}

export default DashBoardTopContent
