import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Users from '../components/Users';
import User from '../components/User';

const RootApp = () =>
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/users/:username" component={User} location={location}/>
                <Route path="/users" component={Users}/>
            </Switch>
        </div>
    </Router>;

export default RootApp;