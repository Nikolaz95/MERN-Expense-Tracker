import React from 'react'
import Button from '../../Buttons/Button';
import styled from "styled-components";
import { iconDelete, iconUpdate } from '../../../../assets/BtnIcons';

/* styled components */
const ActionButtons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

const RoleColums = styled.div`
text-align: center;

    padding: 5px;
    border-radius: 5px;
    font-size: 0.85rem;
    font-weight: bold;

    background-color: ${({ role }) =>
        role === "admin" ? "#ffebee" : "#e3f2fd"};

    color: ${({ role }) =>
        role === "admin" ? "#c62828" : "#1565c0"};
`;

export const userColumns = (onUpdateClick, onDeleteClick) => [
    {
        header: "#ID",
        field: "id",
        className: "tableIdColumn",
    },
    {
        header: "Name",
        field: "name",
        render: (row) => (
            <div style={{ fontWeight: "bold", color: "#333" }}>
                {row.name}
            </div>
        )
    },
    {
        header: "Email",
        field: "email",
    },
    {
        header: "Joined Date",
        field: "createdAt",
        render: (row) => (
            <span>{row.createdAt?.substring(0, 10)}</span>
        )
    },
    {
        header: "Role",
        field: "role",
        render: (row) => (
            <RoleColums role={row.role}>
                {row.role.toUpperCase()}
            </RoleColums>
        )
    },
    {
        header: "Actions",
        render: (row) => (
            <ActionButtons>
                <Button variant='btnTable'
                    icon={iconUpdate}
                    title="User Update"
                    onClick={() => onUpdateClick(row._id)} />
                <Button
                    variant='btnTable'
                    icon={iconDelete} title="Delete User"
                    onClick={() => onDeleteClick(row._id)} />
            </ActionButtons>
        ),
    },


];