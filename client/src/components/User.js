import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    width: 45%;
    margin: 20px auto;

    &:hover {
        text-decoration: none;
    }
`;

const CardSingle = styled.div`
    width: 45%;
    margin: 20px auto
`

const Title = styled.h1`
    text-align: center;
    color: black;
    text-decoration: none;
`;

const Bio = styled.p`
    color: black;
    text-decoration: none;
    text-align: center;
`;

const cardBorder = {
    border: '1px solid black',
    borderRadius: '6px'
};

const ButtonHalf = styled.button`
    width: 50%;
    display: inline-block;
`;

const Buttons = styled.div`
    width: 100%;
`;

const User = (props) => {
    return (
        <>
        {props.singleUser && <Card className="card" style={cardBorder}>
            <Title>{props.name}</Title>
            <Bio>{props.bio}</Bio>
            {props.singleUser &&
            <Buttons>
                <ButtonHalf onClick={props.editUser} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deleteUser} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}

        {!props.singleUser && <CardSingle className="card" style={cardBorder}>
            <Title>{props.name}</Title>
            <Bio>{props.bio}</Bio>
        </CardSingle>}
        </>
    );
}


User.propTypes = {
    fetchUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(User);