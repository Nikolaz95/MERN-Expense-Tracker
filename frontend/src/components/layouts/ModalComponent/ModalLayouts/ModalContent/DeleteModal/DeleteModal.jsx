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
        border-radius: 20px;
        background-color: bisque;
`
const DeleteModalBtnContent = style.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
`

const DeleteModal = ({ deleteTitleText, underPText, onConfirm, onClose }) => {
    return (
        <DeleteModalLayout>
            <h1>{deleteTitleText}</h1>
            <p>{underPText}</p>
            <DeleteModalBtnContent>
                {/* Potvrda brisanja */}
                <Button onClick={onConfirm} variant='btnModal'>
                    <Image src={ConfirmUpdate} variant='iconImg' />
                </Button>
                {/* Odustajanje */}
                <Button variant='btnModal' onClick={onClose}>
                    <Image src={CancelUpdate} variant='iconImg' />
                </Button>
            </DeleteModalBtnContent>
        </DeleteModalLayout>
    )
}

export default DeleteModal