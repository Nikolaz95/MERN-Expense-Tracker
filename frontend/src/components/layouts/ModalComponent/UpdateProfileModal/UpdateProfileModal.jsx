import React from 'react'
import styled from "styled-components"
import Button from '../../Buttons/Button';
import { CancelUpdate, SaveUpdate } from '../../../../assets/Icons';


const UpdateAccountModalLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 30px;
`
const UpdateAccountModalContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 30px;
`

const Input = styled.input`
border: none;
  border-radius: 10px;
padding: 10px;
`;

const InputSelect = styled.select`
width: 100%;
border: none;
text-align: center;
border-radius: 10px;
padding: 10px;
`;

const UpdateProfileModal = () => {
    /* const user = {
        name: "nikola",
        role: "admin",
        email: "nikolajoe@gmail.com",
        createdAt: "2026-04-15",
    } */
    return (
        <UpdateAccountModalLayout>
            <h1>Update Profile</h1>
            <UpdateAccountModalContent /* onSubmit={submitHandler} */>
                <label htmlFor="name_field" className="formLabel">Name:</label>
                <Input type="text" id="name_field"
                    className="form-control" placeholder='fakeUserName'
                    value={name} /* onChange={(e) =>
                        setName(e.target.value)} */ name="name" />
                <label htmlFor="email_field" className="form-label">Email:</label>

                <Input type="email" placeholder='fake@email.com' /* value={email} */
                    /* onChange={(e) => setEmail(e.target.value)} */
                    id="email_field" className="form-control" name="email" />

                <label htmlFor="role_field">
                    Role
                </label>
                <InputSelect name="role" /* value={role} */
                    /* onChange={(e) => setRole(e.target.value)} */ id="role_field">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </InputSelect>

                <Button type="submit" icon={SaveUpdate}>
                    {/* <Image src={SaveUpdate} variant='icon' alt="" title='Update' /> */}
                    Update
                </Button>
                <Button type="submit" icon={CancelUpdate}>
                    {/* <Image src={SaveUpdate} variant='icon' alt="" title='Update' /> */}
                    Cancel
                </Button>

            </UpdateAccountModalContent>
        </UpdateAccountModalLayout>
    )
}

export default UpdateProfileModal