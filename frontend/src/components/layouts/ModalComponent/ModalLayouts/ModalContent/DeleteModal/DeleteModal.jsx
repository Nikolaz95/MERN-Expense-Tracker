import React from 'react'
import style from "styled-components"
import Button from '../../../../Buttons/Button'
import Image from '../../../../Images/Image'
import { CancelUpdate, ConfirmUpdate } from '../../../../../../assets/Icons'


const DeleteModalLayout = style.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 20px;
`
const DeleteModalContent = style.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
`

const DeleteModal = ({ deleteTitleText, underPText, underPText2, onConfirm, onClose }) => {
    return (
        <DeleteModalLayout>
            <h1>{deleteTitleText}</h1>
            <p>{underPText}</p>
            <p>{underPText2}</p>
            <DeleteModalContent>
                {/* Potvrda brisanja */}
                <Button onClick={onConfirm}>
                    <Image src={ConfirmUpdate} variant='iconImg' />
                </Button>
                {/* Odustajanje */}
                <Button onClick={onClose}>
                    <Image src={CancelUpdate} variant='iconImg' />
                </Button>
            </DeleteModalContent>
        </DeleteModalLayout>
    )
}

export default DeleteModal