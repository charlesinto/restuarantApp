import  { combineReducers } from 'redux';

import homeReducers from './homeReducers';

export default combineReducers({
    store: homeReducers
});
