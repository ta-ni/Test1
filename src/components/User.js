import React from 'react';
import PropTypes from 'prop-types';
import {getUser, getFollowers} from '../actions/index';
import UserComponent from './UserComponent';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getContent = this.getContent.bind(this);
    }
    componentWillMount() {
        this.getContent(this.props.location);
    }

    componentWillReceiveProps(nextProps) {
        this.getContent(nextProps.location);
    }

    getContent(location) {
        let username = location.pathname.replace('/users/', '');
        getUser(username)
            .then((user) => {
                this.setState({user});
            });

        getFollowers(username)
            .then((followers) => {
                this.setState({followers});
            })
    }

    render() {

        if (!this.state.user) {
            return null;
        }

        let {user, followers} = this.state;

        return <div className="user">
            <div className="container">
                <div className="user__avatar">
                    <div className="user__avatar-wrapper">
                        <img className="user__avatar-content" src={user.avatar_url}/>
                    </div>
                </div>
                <div className="user__about">
                    <div className="user__title">{user.login}</div>
                    <a href={`https://github.com/${user.login}/following`} className="user__text">follow me</a>
                    <p className="user__text">{user.created_at}</p>
                    {user.company && <p className="user__text">{`company: ${user.company}`}</p>}
                    {user.email && <p className="user__text">{`email: ${user.email}`}</p>}
                    {user.location && <p className="user__text">{user.location}</p>}
                    {user.blog && <p className="user__text">{`blog: ${user.blog}`}</p>}
                    {user.bio && <p className="user__text">{user.bio}</p>}
                </div>
                {followers && followers.map((follower) =>
                    <div className="user__follower-block" key={follower.login}>
                        <UserComponent user={follower}/>
                    </div>
                )}
            </div>
        </div>;
    }
}

User.PropTypes = {
    location: PropTypes.object,
};

export default User;