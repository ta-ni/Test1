import React from 'react';
import {Link} from 'react-router-dom';

const Core = () =>
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
        </nav>
    </div>;

export default Core;