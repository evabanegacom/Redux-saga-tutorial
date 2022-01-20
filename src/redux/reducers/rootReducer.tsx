import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './auth';

const rootReducer = combineReducers({
    products: productReducer,
    loggedInUser: authReducer,
})

export default rootReducer;
