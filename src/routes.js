import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Main from './pages/main';
import Anime from './pages/animes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/animes/:id" component={Anime}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;