import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, updateUser, fetchUser } from '../actions';
import styled from 'styled-components';
import { SubmitBtn } from '../styles';
import PropTypes from 'prop-types';

const FormComponent = styled.form`
    width: 18rem;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
    background-color: #000;
    color: white;
    margin-bottom: 0;
    padding: 10px;
`;

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            bio: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    
    componentDidMount() {
        if(!this.props.registerForm){
            this.props.fetchUser(this.props.userID).then(_ => {
                this.setState({
                    name: this.props.name,
                    bio: this.props.bio
                });
            });
        }
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    addUser(e) {
        e.preventDefault();
        this.props.addUser({
            name: this.state.name,
            bio: this.state.bio
        });
    }

    updateUser(e) {
        e.preventDefault();
        this.props.updateUser({
            id: this.props.userID,
            name: this.state.name,
            bio: this.state.bio
        });
    }

    render() {
        console.log(this.state);
        return (
            <>
                <FormComponent onSubmit={this.props.registerForm ? this.addUser : this.updateUser} className="card">
                    <Title>
                        {this.props.registerForm && "Add user"}
                        {!this.props.registerForm && "Update user"}
                    </Title>
                    
                    <input
                        type="text"
                        name="name"
                        placeholder="User name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <input
                        type="text"
                        name="bio"
                        placeholder="User bio"
                        onChange={this.handleChange}
                        value={this.state.bio}
                    />

                    <SubmitBtn
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                    />
                </FormComponent>
            </>
        );
    }
}

UserForm.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    registerForm: PropTypes.bool.isRequired,
    addUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        name: state.users.user ? state.users.user.name : '',
        bio: state.users.user ? state.users.user.bio : '',
    }
}

const mapDispatchToProps = {
    addUser,
    updateUser,
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);