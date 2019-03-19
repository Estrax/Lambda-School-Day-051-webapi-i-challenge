import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import NavbarContainer from '../containers/Navbar';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import NewUserPage from '../pages/NewUserPage';
import EditUserPage from '../pages/EditUserPage';

export default (props) => {
    return (
        <Router history={props.history}>
            <div>
                <NavbarContainer />
                <Switch>
                    <Route path="/" exact component={UsersPage}/>
                    <Route path="/new" exact component={NewUserPage}/>
                    <Route path="/:id" exact component={UserPage}/>
                    <Route path="/:id/edit" exact component={EditUserPage}/>
                </Switch>
            </div>
        </Router>
    );
}