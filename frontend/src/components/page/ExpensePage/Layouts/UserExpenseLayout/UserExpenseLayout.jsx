import React from 'react'
import styled from "styled-components";

// import components
import SideBar from '../SideBar/SideBar';
import Image from '../../../../layouts/Images/Image';
import { DefoultProfile } from '../../../../../assets/SideBarIcons';



const SectionUserExpaseDashBoard = styled.section`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px;
    border: 1px solid black;
    height: 99vh;
`;

const MainUserExpaseContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid black;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
`;


const HeaderUserDashBoard = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: bisque;
    border-radius: 20px;
`;

const ContentSectionUserDashBoard = styled.section`
   display: flex;
    flex-direction: column;
gap: 20px;
    overflow-y: auto;
    scrollbar-width: none;
`;




const UserExpenseLayout = ({ children }) => {
    return (
        <SectionUserExpaseDashBoard>
            <SideBar />
            <MainUserExpaseContent>
                <HeaderUserDashBoard>
                    <div className='headerContentLeft'>
                        <div className='btn'>+</div>
                    </div>
                    <div className='headerContentLeft'>
                        <Image src={DefoultProfile} variant="smallImg" />
                    </div>
                </HeaderUserDashBoard>
                <ContentSectionUserDashBoard>
                    {children}
                </ContentSectionUserDashBoard>
            </MainUserExpaseContent>
        </SectionUserExpaseDashBoard>
    )
}

export default UserExpenseLayout
