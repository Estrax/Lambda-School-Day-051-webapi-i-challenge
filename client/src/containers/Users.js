import React from 'react';
import User from '../components/User'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none !important;
`;


export default (props) => {
    return (
        <>
            {props.users.map((user, i) => 
                <StyledLink to={`/${user.id}`} key={user.id}>
                    <User key={i} name={user.name} bio={user.bio} />
                </StyledLink>
            )}
        </>
    );
}