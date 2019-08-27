import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers'
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducers,
    applyMiddleware(
        thunkMiddleware, loggerMiddleware
    )
);

export default store;
