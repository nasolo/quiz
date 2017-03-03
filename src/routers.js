// node modules import

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

//components imprt 

import App from './components/app';
import Main from './components/main';
import About from './components/about';

//Routs definition

export default (

    <Route path="/" component={App}>
        <IndexRoute component={Main} />    
        <Route path="/about" component={About}/>
    </Route>
);
