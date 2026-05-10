import React, { useState } from 'react'

import styled from "styled-components";
import Button from '../../../../Buttons/Button';
import FilterCategory from '../../../../FilterCategory/FilterCategory';
import DatePicker from 'react-datepicker';
import DataPicker from '../../../../DataComponents/DatePicker';
import useCurrency from '../../../../../hooks/useCurrency';

/* import { useCurrency } from '../../../../../context/CurrencyContext/CurrencyContext'; */
import { formatNumber } from '../../../../../utils/formatNumber';
import { useWordCount } from '../../../../../hooks/useWordCount';
import toast from 'react-hot-toast';
import { useCreateTransactionMutation } from '../../../../../../redux/api/transactionsApi';

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

const IncomeExpenseModal = ({ onClose, type, titleText, underTitleText, buttonText, placholderText, placholderTextDescription, recipientTitle, recipientPlaceholder }) => {
    const [recipientTitleText, setRecipientTitleText] = useState("");
    const [category, setCategory] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [amount, setAmount] = useState("");
    const { currency } = useCurrency();
    const [notes, setNotes] = useState("");

    const [createTransaction, { isLoading }] = useCreateTransactionMutation();

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


    const handleSubmit = async () => {
        if (!amount || !category || !recipientTitleText) {
            toast.error("Please fill in amount, category or Recipient Title !");
            return;
        }


        try {
            await createTransaction({
                title: recipientTitleText.trim(),

                amount: Number(amount),
                type: type, // 'income' ili 'expense'
                category: category,
                description: notes, // Ovo ide u description na backendu
                date: selectedDate,
            }).unwrap();

            toast.success(`${type === 'income' ? 'Income' : 'Expense'} added successfully!`);
            onClose();
        } catch (err) {
            toast.error(err?.data?.message || "Something went wrong!");
        }
    };

    return (
        <CustomModalSection>
            <ModalTopSection>
                <h2>{titleText}</h2>
                <CloseButton onClick={onClose} title='close Modal'>X</CloseButton>
            </ModalTopSection>

            <CustomModalMainContent>
                <p>{underTitleText}</p>
                <h5>Income Category</h5>
                <FilterCategory type={type} variant={type} value={category}
                    onChange={(e) => setCategory(e.target.value)} />
                <SectionContent>
                    <h2>{recipientTitle}</h2>
                    <input
                        type="text"
                        placeholder={recipientPlaceholder}
                        value={recipientTitleText}
                        onChange={(e) => setRecipientTitleText(e.target.value)}
                    />

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
                        <Button onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? "Adding..." : buttonText}
                        </Button>

                    </BottomSection>

                </SectionContent>
            </CustomModalMainContent>

        </CustomModalSection>
    )
}

export default IncomeExpenseModal
