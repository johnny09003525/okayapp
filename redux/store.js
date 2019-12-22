/* eslint no-unused-vars: 0 */
/* global __DEV__ */

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import listReducer from './list';

// setup redux

const rootReducer = combineReducers({
  listState: listReducer,
});

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const logger = createLogger();
  middlewares.push(logger);
}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
