import { combineReducers } from 'redux';
import {routerReducer} from "react-router-redux";
// reducers
import authReducer from '../auth/authReducer';

export default combineReducers({
    auth: authReducer,
    routing: routerReducer
})