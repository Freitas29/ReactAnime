import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Main from './pages/main';
import Anime from './pages/animes';
import SignIn from './pages/sign-in'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main }></Route>
            <Route path="/animes/:id" component={ Anime }></Route>
            <Route path="/signIn" component={ SignIn }></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;