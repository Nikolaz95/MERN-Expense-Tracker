import React, { useState } from 'react'
import styled from "styled-components";

// import components
import SideBar from '../SideBar/ExpenseSideBar';
import Image from '../../../../layouts/Images/Image';
import { DefoultProfile } from '../../../../../assets/SideBarIcons';
import Button from '../../../../layouts/Buttons/Button';



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

    @media  screen and (max-width: 425px) {

    padding: 0;
  }
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <SectionUserExpaseDashBoard>
            <SideBar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <MainUserExpaseContent>
                <HeaderUserDashBoard>
                    <section className='headerContentLeft'>
                        <Button className='btn'
                            onClick={() => setIsSidebarOpen(true)} >
                            ☰
                        </Button>
                    </section>
                    <section className='headerContentLeft'>
                        <Image src={DefoultProfile} variant="smallImg" title="username" />
                    </section>
                </HeaderUserDashBoard>
                <ContentSectionUserDashBoard>
                    {children}
                </ContentSectionUserDashBoard>
            </MainUserExpaseContent>
        </SectionUserExpaseDashBoard>
    )
}

export default UserExpenseLayout
