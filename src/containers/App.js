import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../reducers/index';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Main SCSS that imports the others.
import '../css/app.scss';

import Home from './Home';

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}
