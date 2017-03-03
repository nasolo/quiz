// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// componets import
import App from './components/app';


//Reducers import
import reducers from './reducers';


// Store definition with Middleware and Rendering of React Document Object Model
const createStorewithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(


        <App />,
        document.getElementById('root')

)

