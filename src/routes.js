import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { isAuth } from './utils/isAuth'
import Main from './pages/main';
import Anime from './pages/animes';
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuth() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main }></Route>
            <PrivateRoute exact path="/animes/:id" component={ Anime }></PrivateRoute>
            <Route path="/signIn" component={ SignIn }></Route>
            <Route path="/signUp" component={ SignUp }></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;