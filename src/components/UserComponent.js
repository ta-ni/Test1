import React from 'react';
import {Link} from 'react-router-dom';

const UserComponent = (props) =>
    <div className="users__item">
        <Link to={`/users/${props.user.login}`} className="users__preview">
            <div className="users__avatar">
                <div className="users__avatar-wrapper">
                    <img className="users__avatar-content" src={props.user.avatar_url}/>
                </div>
            </div>
            <div className="users__name">
                {props.user.login}
            </div>
        </Link>
        <a className="users__link" href={props.user.html_url}>Github link</a>
    </div>;

export default UserComponent;