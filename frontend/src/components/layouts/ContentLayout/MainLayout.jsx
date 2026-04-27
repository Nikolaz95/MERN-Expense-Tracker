import React from 'react'

//import css
import styled from "styled-components";
import ImageBackground from '../ImageBackground/ImageBackground';



/* styled css */

const ContentLayoutSection = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 75.7vh;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;


const MainLayout = ({ children }) => {
    return (
        <>
            <ImageBackground />
            <ContentLayoutSection>
                {children}
            </ContentLayoutSection>
        </>

    )
}

export default MainLayout