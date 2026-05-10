import React, { useState } from 'react'
import styled from "styled-components"
import useCurrency from '../../../../../hooks/useCurrency';

import { formatNumber } from '../../../../../utils/formatNumber';
import { useWordCount } from '../../../../../hooks/useWordCount';


const CustomModalSection = styled.section`
display: flex;
    flex-direction: column;
    gap: 10px;
`;

const DescriptionTransactionSection = styled.section`
display: flex;
    flex-direction: column;
    gap: 10px;
`;

const DescriptionTextArea = styled.textarea`
    border-radius: 20px;
    
    height: 100px;
    padding: 10px;
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const UpdateAccountModalContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const AmountInfo = styled.p`
    color: ${({ $isNegative }) => $isNegative ? "red" : "green"};
    font-weight: bold;
`;

const DescriptionCounter = styled.p`
   text-align: right;
`;

const InfoTransactionModal = ({ transaction, onClose }) => {
    const { convert, currency } = useCurrency();
    const [notes, setNotes] = useState("");
    const MAX_WORDS = 200;

    // 2. Proslijedi opis iz transakcije direktno u hook
    const { wordCount } = useWordCount(transaction?.description || "", MAX_WORDS);
    return (
        <CustomModalSection>
            <UpdateAccountModalContent>
                <h2>Recipient</h2>
                <p>{transaction.title}</p>
                <h2>Category</h2>
                <p>{transaction.category}</p>
                <h2>Transaction Date</h2>
                <p>{transaction.date.substring(0, 10)}</p>
                <DescriptionTransactionSection>
                    <label htmlFor="descriptionText">Description</label>
                    <DescriptionTextArea name="" id="descriptionText"
                        value={transaction.description}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder=""
                        disabled
                        maxLength={MAX_WORDS}>

                    </DescriptionTextArea>
                    <DescriptionCounter>
                        {wordCount}/{MAX_WORDS}
                    </DescriptionCounter>

                </DescriptionTransactionSection>

                <h2>Amount</h2>
                <AmountInfo $isNegative={transaction.amount < 0}>
                    {currency?.symbol} {formatNumber(convert(transaction.amount))}
                </AmountInfo>
            </UpdateAccountModalContent>
        </CustomModalSection>
    )
}

export default InfoTransactionModal