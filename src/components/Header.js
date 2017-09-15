import React from 'react';
import {Link} from 'react-router-dom';

const Core = () =>
    <div className="header">
        <div className="container clearfix">
            <nav className="header__nav-menu">
                <Link className="header__nav-link" to='/'>Home</Link>
                <Link className="header__nav-link" to='/users'>Users</Link>
            </nav>
        </div>
    </div>;

export default Core;