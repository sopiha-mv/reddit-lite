import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {apiMiddleware} from 'redux-api-middleware'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const middleware = [
    promise,
    apiMiddleware,
    thunk
];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

const store = createStore(rootReducer, enhancer);

export {store}