import React, { useState } from 'react'

import styled from "styled-components";
import Button from '../../../../Buttons/Button';
import FilterCategory from '../../../../FilterCategory/FilterCategory';
import DatePicker from 'react-datepicker';
import DataPicker from '../../../../DataComponents/DatePicker';

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

    const [notes, setNotes] = useState("");
    const MAX_LENGTH = 200;
    const trimmedNotes = notes.trim();

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

                    <h5>Amount</h5>
                    <input type="number" placeholder={placholderText} min="0" />
                    <h5>Date</h5>
                    <DataPicker
                        selected={selectedDate}
                        onChange={setSelectedDate}
                    />
                    <DescriptionTransactionSection>
                        <label htmlFor="descriptionText">Description</label>
                        <DescriptionTextArea name="" id="descriptionText"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder={placholderTextDescription}
                            maxLength={MAX_LENGTH}>

                        </DescriptionTextArea>
                        <DescriptionCounter>
                            {trimmedNotes.length === 0 ? 0 : notes.length}/{MAX_LENGTH}
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
