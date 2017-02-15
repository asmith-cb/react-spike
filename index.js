import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import App from './app';
import reducers from './app/reducers';
import sagas from './app/sagas';

/*
	Create Store with reducers and middleware
*/
const middlewares = [
	createSagaMiddleware()
];

const store = createStore(
	reducers,
	applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas);

/*
	Render the App
*/
const target = document.getElementById('myClosetbox');

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, target);