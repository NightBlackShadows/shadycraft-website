import App from './App'
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './allReducers';
import thunk from 'redux-thunk';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
);
