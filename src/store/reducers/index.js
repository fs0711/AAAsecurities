/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';


import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    
});

export default rootReducer;
