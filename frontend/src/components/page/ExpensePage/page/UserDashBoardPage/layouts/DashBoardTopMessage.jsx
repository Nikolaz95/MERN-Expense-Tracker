import React from 'react'

import styled from "styled-components";
import useGreeting from '../../../../../hooks/useGreeting';

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

    return (
        <MessageTextSection>
            <Header>{greeting}, Nikola</Header>
            <p>This is your finance report</p>
        </MessageTextSection>
    )
}

export default DashBoardTopMessage
