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
    },
    {
        header: "Role",
        field: "role",
        render: (row) => (
            <span style={{
                padding: "4px 8px",
                borderRadius: "4px",
                backgroundColor: row.role === 'admin' ? '#ffebee' : '#e3f2fd',
                color: row.role === 'admin' ? '#c62828' : '#1565c0',
                fontSize: "0.85rem",
                fontWeight: "bold"
            }}>
                {row.role.toUpperCase()}
            </span>
        )
    },
    {
        header: "Actions",
        render: (row) => (
            <ActionButtons>
                <Button variant='btnTable'
                    icon={iconUpdate}
                    title="User Update"
                    onClick={() => onUpdateClick(row.id)} />
                <Button
                    variant='btnTable'
                    icon={iconDelete} title="Delete User"
                    onClick={() => onDeleteClick(row.id)} />
            </ActionButtons>
        ),
    },


];