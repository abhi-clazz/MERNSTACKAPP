import { combineReducers } from 'redux';
import busReducer from './busReducer';

import LoginReducer from './LoginReducer'
export default combineReducers({

    login: LoginReducer,
    bus:busReducer,
    oplogin:LoginReducer
})