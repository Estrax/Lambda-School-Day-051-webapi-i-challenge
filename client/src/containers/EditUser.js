import React from 'react';
import UserForm from '../components/UserForm';

export default (props) => {
    return (
        <>
            <UserForm registerForm={false} userID={props.userID} />
        </>
    );
}