  
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import setAuthToken from './actions/setAuthToken';
import setAuthToken1 from './actions/setAuthToken';


const initialState = {};

const middleware = [thunk]

const store = createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

setAuthToken(localStorage.getItem('token'))
setAuthToken1(localStorage.getItem('token1'))


export default store;