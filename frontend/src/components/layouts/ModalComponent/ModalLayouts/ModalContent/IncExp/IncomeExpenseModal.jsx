import React, { useState } from 'react'

import styled from "styled-components";
import Button from '../../../../Buttons/Button';
import FilterCategory from '../../../../FilterCategory/FilterCategory';
import DatePicker from 'react-datepicker';
import DataPicker from '../../../../DataComponents/DatePicker';
import { useCurrency } from '../../../../../context/CurrencyContext/CurrencyContext';
import { formatNumber } from '../../../../../utils/formatNumber';
import { useWordCount } from '../../../../../hooks/useWordCount';

const CustomModalSection = styled.section`
display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ModalTopSection = styled.section`
display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CloseButton = styled.button`
align-self: flex-end;
  cursor: pointer;
  /* border: 1px solid; */
  border: none;
  padding: 5px;
  border-radius: 20px;
`;

const CustomModalMainContent = styled.main`
display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SectionContent = styled.section`
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

const DescriptionCounter = styled.p`
   text-align: right;
`;


const BottomSection = styled.section`
   display: flex;
   justify-content: center;
`

const IncomeExpenseModal = ({ onClose, type, titleText, underTitleText, buttonText, placholderText, placholderTextDescription }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [amount, setAmount] = useState("");
    const { currency } = useCurrency();
    const [notes, setNotes] = useState("");

    const MAX_WORDS = 200;
    const { wordCount, isOverLimit } = useWordCount(notes, MAX_WORDS);

    const handleAmountChange = (e) => {
        const raw = e.target.value.replace(/\s/g, ''); // makni spaces
        if (isNaN(raw)) return; // samo brojevi
        setAmount(raw);
    };

    const handleDescriptionChange = (e) => {
        const newValue = e.target.value;
        // Ovdje koristimo hook logiku da provjerimo bi li novi unos prešao limit
        const newWordCount = newValue.trim().split(/\s+/).filter(Boolean).length;

        // Dopusti promjenu samo ako je unutar limita ili ako korisnik briše tekst
        if (newWordCount <= MAX_WORDS || newValue.length < notes.length) {
            setNotes(newValue);
        }
    };

    const formattedAmount = amount ? formatNumber(amount) : "";

    return (
        <CustomModalSection>
            <ModalTopSection>
                <h2>{titleText}</h2>
                <CloseButton onClick={onClose} title='close Modal'>X</CloseButton>
            </ModalTopSection>

            <CustomModalMainContent>
                <p>{underTitleText}</p>
                <h5>Income Category</h5>
                <FilterCategory type={type} variant={type} />
                <SectionContent>

                    <h5>Amount ({currency?.symbol})</h5>
                    <input
                        type="text"                        // ← text umjesto number
                        placeholder={placholderText}
                        value={formattedAmount}            // ← formatirani broj
                        onChange={handleAmountChange}
                    />
                    <h5>Date</h5>
                    <DataPicker
                        selected={selectedDate}
                        onChange={setSelectedDate}
                    />
                    <DescriptionTransactionSection>
                        <label htmlFor="descriptionText">Description</label>
                        <DescriptionTextArea name="" id="descriptionText"
                            value={notes}
                            onChange={handleDescriptionChange}
                            placeholder={placholderTextDescription}
                            maxLength={MAX_WORDS}>

                        </DescriptionTextArea>
                        <DescriptionCounter>
                            {wordCount}/{MAX_WORDS}
                        </DescriptionCounter>

                    </DescriptionTransactionSection>

                    <BottomSection>
                        <Button>{buttonText}</Button>

                    </BottomSection>

                </SectionContent>
            </CustomModalMainContent>

        </CustomModalSection>
    )
}

export default IncomeExpenseModal
