import React from 'react'

//import css
import styled from "styled-components";


/* styled css */
const BenefitsPanelAside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;


    /* @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
    } */
`;

const BenefitsItItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const BenefitsItItemH2 = styled.h2`
text-align: center;
color: white;
`;

const BenefitsItItemP = styled.p`
font-size: 20px;
    font-weight: bold;
`;

const BenefitsPanel = () => {
    return (
        <BenefitsPanelAside>

            <BenefitsItItemH2>Why create an account?</BenefitsItItemH2>

            <BenefitsItItem>
                <BenefitsItItemH2>Cloud Sync 💾</BenefitsItItemH2>
                <BenefitsItItemP>Access your finances from any device. </BenefitsItItemP>
                <BenefitsItItemP>Your data is encrypted and securely backed up in the cloud.</BenefitsItItemP>
            </BenefitsItItem>

            <BenefitsItItem>
                <BenefitsItItemH2>Multi-Currency Support 🌍</BenefitsItItemH2>

                <BenefitsItItemP>
                    Traveling or working abroad?
                </BenefitsItItemP>
                <BenefitsItItemP>
                    Track expenses in 150+ currencies with
                    automatic real-time conversion to your base currency.
                </BenefitsItItemP>
            </BenefitsItItem>

            <BenefitsItItem>
                <BenefitsItItemH2>Deep Insights 📊</BenefitsItItemH2>

                <BenefitsItItemP>Identify spending leaks with visual reports and category breakdowns designed to help you save more.
                </BenefitsItItemP>
            </BenefitsItItem>

            <BenefitsItItem>
                <BenefitsItItemH2>Financial Privacy 🔒</BenefitsItItemH2>
                <BenefitsItItemP>
                    Take control of your data.
                </BenefitsItItemP>
                <BenefitsItItemP>We prioritize your privacy and never share
                    your financial habits with third parties.</BenefitsItItemP>
            </BenefitsItItem>
        </BenefitsPanelAside>
    )
}

export default BenefitsPanel
