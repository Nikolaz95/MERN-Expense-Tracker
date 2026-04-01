import React from 'react'

import styled from "styled-components";

const MessageTextSection = styled.section`
    text-align: center;
`;

const Header = styled.h1`
    @media  screen and (max-width:320px) {
    font-size: 25px;
  }
`;

const DashBoardTopMessage = () => {


    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            return "Good Morning";
        } else if (hour >= 12 && hour < 18) {
            return "Good Afternoon";
        } else if (hour >= 18 && hour < 22) {
            return "Good Evening";
        } else {
            return "Good Evening";
        }
    };
    return (
        <MessageTextSection>
            <Header>{getGreeting()}, Nikola</Header>
            <p>This is your finance report</p>
        </MessageTextSection>
    )
}

export default DashBoardTopMessage
