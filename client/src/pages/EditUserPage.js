import React from 'react';
import EditUser from '../containers/EditUser';

export default (props) => {
    return (
        <>
            <EditUser userID={Number(props.match.params.id)} />
        </>
    );
}