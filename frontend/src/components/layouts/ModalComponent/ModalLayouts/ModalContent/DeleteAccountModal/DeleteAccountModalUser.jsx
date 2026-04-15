import React from 'react'
import style from "styled-components"
import Button from '../../../../Buttons/Button'
import Image from '../../../../Images/Image'
import { CancelUpdate, ConfirmUpdate } from '../../../../../../assets/Icons'


const DeleteAccountModalLayout = style.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 30px;
`
const DeleteAccountModalContent = style.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 30px;
`

const DeleteAccountModalUser = ({ onClose }) => {
    return (
        <DeleteAccountModalLayout>
            <h1>Do you realy wanna delete account ?</h1>
            <p>Are you sure you want to delete this user account?</p>
            <p>This action cannot be undone.</p>
            <DeleteAccountModalContent>
                <Button /* onClick={handleDelete} */
                    /* disabled={isLoading} */>
                    <Image src={ConfirmUpdate} variant='iconImg' />
                </Button>
                <Button>
                    <Image src={CancelUpdate} variant='iconImg' /* onClick={onClose} */ /></Button>
            </DeleteAccountModalContent>
        </DeleteAccountModalLayout>
    )
}

export default DeleteAccountModalUser