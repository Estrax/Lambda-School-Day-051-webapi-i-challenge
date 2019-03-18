import React from 'react';
import EditUser from '../containers/EditUser';

export default (props) => {
    return (
        <>
            <EditUser toolID={Number(props.match.params.id)} />
        </>
    );
}