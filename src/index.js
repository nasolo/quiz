// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';


// componets import
//import App from './components/app';

import routes from './routers'


//Reducers import
import reducers from './reducers';

//styles import

import '../styles/index.scss'
// Store definition with Middleware and Rendering of React Document Object Model
const createStorewithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(

        <Provider store = {createStorewithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}/>
        </Provider>, document.getElementById('root')
)

