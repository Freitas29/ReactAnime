import React from 'react';

import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { isAuth } from './utils/isAuth'
import Main from './pages/main';
import Anime from './pages/animes';
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import Header from './components/header'
import AnimeNew from './pages/animes/new'
import AnimeShow from './pages/animes/show'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuth() ?
                <Component {...props} />
            : <Redirect to="/signIn" />
        )} />
    );
};

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={ Anime }></Route>
            <PrivateRoute exact path="/animes" component={ Anime }></PrivateRoute>
            <PrivateRoute exact path="/animes/new" component={ AnimeNew }></PrivateRoute>
            <Route path="/animes/:id" component={ AnimeShow }></Route>
            <Route path="/signIn" component={ SignIn }></Route>
            <Route path="/signUp" component={ SignUp }></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;