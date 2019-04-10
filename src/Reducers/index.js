import  { combineReducers } from 'redux';

import homeReducers from './homeReducers';

import shopReducer from './shopReducer';

export default combineReducers({
    store: homeReducers,
    shop: shopReducer
});
