import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './redux/reducers/combineReducers';
import { logger } from './redux/middleware';

const store = createStore(rootReducers, applyMiddleware(logger)); 

export default store;