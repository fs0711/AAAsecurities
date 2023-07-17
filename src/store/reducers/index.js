/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';


import authReducer from './authReducer';
import userReducer from './userReducer';
import employeeReducer from './employeeReducer';
import clientReducer from './clientReducer';
import sitesReducer from './sitesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    employee: employeeReducer,
    client: clientReducer,
    sites: sitesReducer,
});

export default rootReducer;
