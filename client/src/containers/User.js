import React from 'react';
import User from '../components/User';
import PropTypes from 'prop-types';

const UserContainer = (props) => {
    return (
        <>
            <User
                key={props.user.id}
                id={props.user.id}
                name={props.user.name}
                bio={props.user.bio}
                editUser={props.editUser}
                deleteUser={props.deleteUser}
                singleUser={true}
            />
        </>
    );
}

UserContainer.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
    }).isRequired,
    editUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default UserContainer;