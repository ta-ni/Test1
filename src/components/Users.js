import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUsers} from '../actions/index';
import UserComponent from './UserComponent';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let count = 0,
            maxCount = 2,
            usersArray = [];

        let setAllUsers = (count, maxCount) => {

            if (count <= maxCount) {

                getUsers(count)
                    .then(data => {
                        usersArray = [
                            ...usersArray,
                            ...data
                        ];
                        count += data.length;
                        setAllUsers(count, maxCount);
                    })
                    .catch(() => {

                    });
            } else {
                this.props.dispatch({type: 'ADD_USERS', users: usersArray});
            }
        };

        setAllUsers(count, maxCount);
    }

    render() {

        if (!this.props.users.length) {
            return null;
        }

        let {users} = this.props;

        return <div className="users">
            <div className="container">
                <div className="users__title">Users</div>

                <div className="users__content">

                    {users.map((user) =>
                        <div className="users__item-block" key={user.login}>
                            <UserComponent user={user}/>
                        </div>
                    )}

                </div>
            </div>
        </div>;
    }
}

Users.PropTypes = {
    dispatch: PropTypes.func,
    users: PropTypes.bool,
};

export default connect((state) => ({
    users: state.users
}))(Users);