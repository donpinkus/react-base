import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

import ui from './ui/ui';
import alarms from './alarms';

const reducer = combineReducers({ 
  routing: routerReducer, 
  ui,
  alarms
});

export const store = createStore(reducer, {}, compose(
    applyMiddleware(
      routerMiddleware(browserHistory), 
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);