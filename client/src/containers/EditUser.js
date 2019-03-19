import React from 'react';
import UserForm from '../components/UserForm';
import PropTypes from 'prop-types';

const EditUser = (props) => {
    return (
        <>
            <UserForm registerForm={false} userID={props.userID} />
        </>
    );
}

EditUser.propTypes = {
    userID: PropTypes.number.isRequired
}

export default EditUser;