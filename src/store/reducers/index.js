/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';


import authReducer from './authReducer';
import userReducer from './userReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    employee: employeeReducer,
    
});

export default rootReducer;
