import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Switch, NavLink, Redirect } from 'react-router-dom'
import Route from "./PrivateRoute"
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App';
import SignIn from './SignIn'

import registerServiceWorker from './registerServiceWorker';
import { Button} from '../node_modules/@material-ui/core';


const Menu = (props) => {
    return <div>
        <NavLink to="/home"><Button>Home</Button></NavLink>
        <NavLink to="/about"><Button>About</Button></NavLink>
        {props.children}
    </div>
}


const MenuHome = (props) => {
    return <div>
        <NavLink to="/home/user"><Button>User</Button></NavLink>
        <NavLink to="/home/profile"><Button>Profile</Button></NavLink>
        {props.children}
    </div>
}

const HomePage = (props) => {
    return <div>
        <Menu />
        <MenuHome />
        <Switch>
            <Route path="/home/user" component={UserPage} />
            <Route path="/home/profile" component={ProfilePage} />
            <Route exact path="/home" component={App} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/error" />
        </Switch>

    </div>
}
const UserPage = (props) => {
    return <div>User</div>
}

const ProfilePage = (props) => {
    return <div>Profile</div>
}

const AboutPage = (props) => {
    return <div><Menu />About</div>
}

const ErrorPage = (props) => {
    return <div><Menu /> => 404, {props.match.params.name} x jumpa</div>
}

const history = createBrowserHistory()

ReactDOM.render(
    <div>
        <Router history={history}>
            <Switch>
                <Route path="/home" component={HomePage} />

                <Route path="/about" component={AboutPage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signout" />

                <Route exact path="/" component={HomePage} />

                <Route path="/:name" component={ErrorPage} />
            </Switch>
        </Router>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
