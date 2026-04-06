import React from 'react'
import Image from '../../Images/Image';
import { DashBoardTitleIcon } from '../../../../assets/IconTitle';
import { transactionCategories } from '../../../constants/transactionCategories.js';

export const transactionColumns = [
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
];