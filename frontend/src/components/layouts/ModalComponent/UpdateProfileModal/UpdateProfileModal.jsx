import React from 'react'
import styled from "styled-components"
import Button from '../../Buttons/Button';
import { CancelUpdate, SaveUpdate } from '../../../../assets/Icons';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../../../redux/api/userApi';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';


const CustomModalSection = styled.section`
display: flex;
    flex-direction: column;
    gap: 10px;
`;


const UpdateAccountModalContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const BottonModalSection = styled.section`
display: flex;
flex-direction: row;
gap: 10px;

`;


const Input = styled.input`
border: 1px solid black;
  border-radius: 10px;
padding: 10px;
`;

const InputSelect = styled.select`
width: 100%;
border: 1px solid black;
text-align: center;
border-radius: 10px;
padding: 10px;
`;

const UpdateProfileModal = ({ userId, onClose }) => {
    const { data } = useGetUserDetailsQuery(userId);
    const [updateUser, { error, isSuccess }] = useUpdateUserMutation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: ""
    });

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (data?.user) {
            setFormData({
                name: data.user.name,
                email: data.user.email,
                role: data.user.role
            });
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            toast.error(error?.data?.message);
        }
        if (isSuccess) {
            toast.success(`Account ${formData.name} has been updated successfully`);
            onClose();
        }
    }, [error, isSuccess, onClose, formData.name]);


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await updateUser({
                id: userId,
                body: formData
            }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CustomModalSection>
            <h1> Update Profile</h1 >
            <UpdateAccountModalContent onSubmit={submitHandler}>
                <label htmlFor="name_field" className="formLabel">Name:</label>
                <Input type="text" id="name_field"
                    className="form-control" placeholder='fakeUserName'
                    value={formData.name}
                    onChange={onChange}
                    name="name" />
                <label htmlFor="email_field" className="form-label">Email:</label>

                <Input type="email" placeholder='fake@email.com'
                    value={formData.email}
                    onChange={onChange}
                    /* onChange={(e) => setEmail(e.target.value)} */
                    id="email_field" className="form-control" name="email" />

                <label htmlFor="role_field">
                    Role
                </label>
                <InputSelect name="role"
                    value={formData.role}
                    onChange={onChange}
                    /* onChange={(e) => setRole(e.target.value)} */
                    id="role_field">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </InputSelect>

                <BottonModalSection>

                    <Button type="submit" icon={SaveUpdate}>
                        {/* <Image src={SaveUpdate} variant='icon' alt="" title='Update' /> */}
                        Update
                    </Button>
                    <Button type="submit" icon={CancelUpdate}>
                        {/* <Image src={SaveUpdate} variant='icon' alt="" title='Update' /> */}
                        Cancel
                    </Button>
                </BottonModalSection>

            </UpdateAccountModalContent>
        </CustomModalSection>
    )
}

export default UpdateProfileModal