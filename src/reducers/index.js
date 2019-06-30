import {combineReducers} from 'redux'
import postReducer from './postReducer.js';

const rootReducer = combineReducers({
    post: postReducer
});

export default rootReducer