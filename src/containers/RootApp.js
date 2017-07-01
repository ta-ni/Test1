import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../components/About';
import Core from '../components/Core';
import Home from '../components/Home';
import Users from '../components/Users';

const RootApp = () =>
    <Router>
        <div>
            <Core/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/users" component={Users}/>
            </Switch>
        </div>
    </Router>;

export default RootApp;