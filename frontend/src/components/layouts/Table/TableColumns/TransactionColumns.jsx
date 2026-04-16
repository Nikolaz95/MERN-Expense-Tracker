import React from 'react'
import Image from '../../Images/Image';
import { DashBoardTitleIcon } from '../../../../assets/IconTitle';
import { transactionCategories } from '../../../constants/transactionCategories.js';
import Button from '../../Buttons/Button.jsx';
// styled css
import styled from "styled-components";
import { iconDelete, iconInfo } from '../../../../assets/BtnIcons.jsx';

const TtnTableColumn = styled.span`
display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;


export const transactionColumns = (onUpdateClick, openModalDeleteTransaction) => [
    {
        header: "Recipient",
        field: "recipient",
        render: (row) => {
            const categoryObj = transactionCategories.find(c => c.value === row.category);
            const icon = categoryObj?.icon ?? "💳";

            return (
                <div className="tableDataContent">
                    <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                    <span>{row.recipient}</span>
                </div>
            );
        },
    },
    {
        header: "Category",
        field: "category",
        className: "tableRowMidle",
    },
    {
        header: "Transaction Date",
        field: "date",
        className: "tableRowMidle",
    },
    {
        header: "Amount",
        field: "amount",
        className: "tableRowMidle",
        render: (row) => (
            <span
                style={{
                    color: row.amount < 0 ? "red" : "green",
                    fontWeight: "bold",
                }}
            >
                €{row.amount}
            </span>
        ),
    },
    {
        header: "Info",
        field: "date",
        /* className: "tableRowMidle", */
        render: (row) => (
            <TtnTableColumn>
                <Button variant='btnTable' className='btnTable' title="Info" icon={iconInfo}></Button>
                <Button variant='btnTable'
                    title="Delete Transaction"
                    icon={iconDelete}
                    onClick={() => openModalDeleteTransaction(row)}
                ></Button>
            </TtnTableColumn>
        ),
    },
];