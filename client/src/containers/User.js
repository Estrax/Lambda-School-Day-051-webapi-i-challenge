import React from 'react';
import User from '../components/User';

export default (props) => {
    return (
        <>
            <User
                key={props.user.id}
                id={props.user.id}
                name={props.user.name}
                bio={props.user.bio}
                editUser={props.editUser}
                deleteUser={props.deleteUser}
                userID={props.userID}
                singleUser={true}
            />
        </>
    );
}