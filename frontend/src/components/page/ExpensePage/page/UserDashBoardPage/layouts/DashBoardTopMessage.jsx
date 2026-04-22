import React from 'react'

import styled from "styled-components";
import useGreeting from '../../../../../hooks/useGreeting';
import { useSelector } from 'react-redux';

const MessageTextSection = styled.section`
    text-align: center;
`;

const Header = styled.h1`
    @media  screen and (max-width:320px) {
    font-size: 25px;
  }
`;

const DashBoardTopMessage = () => {
    const greeting = useGreeting();

    const { user } = useSelector((state) => state.auth);

    return (
        <MessageTextSection>
            <Header>{greeting}, {user?.name}</Header>
            <p>This is your finance report</p>
        </MessageTextSection>
    )
}

export default DashBoardTopMessage
