import React, { Component } from 'react';
import User from '../containers/User';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers, deleteUser } from '../actions';
import { history } from '../';
import PropTypes from 'prop-types';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchUser(this.props.match.params.id);
    }

    editUser(e) {
        e.preventDefault();
        history.push(`/${this.props.user.id}/edit`);
    }

    deleteUser(e) {
        e.preventDefault();
        this.props.deleteUser(this.props.user.id);
    }

    render() {
        console.log(this.props.user);
        return (
            <>
                {this.props.user && <User userID={this.props.userID} user={this.props.user} editUser={this.editUser} deleteUser={this.deleteUser} users={this.props.users} />}
            </>
        );
    }
}

User.propTypes = {
    
}

const mapStateToProps = state => {
    return {
        user: state.users.user ? state.users.user : {id: -1, name: '', bio: ''},
        userID: state.users.user ? state.users.user.id : -1,
        users: state.users.users ? state.users.users : []
    }
}

const mapDispatchToProps = {
    fetchUser,
    deleteUser,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);