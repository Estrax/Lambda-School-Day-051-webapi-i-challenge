import React from 'react';
import User from '../components/User'

export default (props) => {
    return (
        <>
            {props.users.map((user, i) => 
                <User key={i} name={user.name} bio={user.bio} />
            )}
        </>
    );
}