/**
This reducer handles all "UI" state.
**/
import { combineReducers } from 'redux';
import merge from 'lodash.merge'

import sitewide from './sitewide';

export default combineReducers({
  sitewide
});

