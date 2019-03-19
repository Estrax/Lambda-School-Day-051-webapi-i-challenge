import React, { Component } from 'react';
import UserContainer from '../containers/User';
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
        return (
            <>
                {this.props.user && <UserContainer user={this.props.user} editUser={this.editUser} deleteUser={this.deleteUser} users={this.props.users} />}
            </>
        );
    }
}

UserPage.propTypes = {
    users: PropTypes.array.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
    }).isRequired,
    fetchUser: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.users.user ? state.users.user : {id: -1, name: '', bio: ''},
        users: state.users.users ? state.users.users : []
    }
}

const mapDispatchToProps = {
    fetchUser,
    deleteUser,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);