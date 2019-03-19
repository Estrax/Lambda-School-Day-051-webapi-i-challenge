import React from 'react';
import User from '../components/User'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
    text-decoration: none !important;
`;


const Users = (props) => {
    return (
        <>
            {props.users.map((user, i) => 
                <StyledLink
                    to={`/${user.id}`}
                    key={user.id}
                >
                    <User
                        key={i}
                        name={user.name}
                        bio={user.bio}
                        singleUser={false}
                    />
                </StyledLink>
            )}
        </>
    );
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users;