import React from 'react'
import Image from '../../Images/Image';
import { DashBoardTitleIcon } from '../../../../assets/IconTitle';

export const transactionColumns = [
    {
        header: "Recipient",
        field: "recipient",
        render: (row) => (
            <div className="tableDataContent">
                <Image src={DashBoardTitleIcon} variant="xSmallImg" />
                <span>{row.recipient}</span>
            </div>
        ),
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