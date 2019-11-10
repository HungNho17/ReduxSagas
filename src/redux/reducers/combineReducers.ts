import { combineReducers } from 'redux';
import { helloWorld } from './helloworld';

export const rootReducers = combineReducers({
 helloWorld: helloWorld,
});

export type IAppState = ReturnType<typeof rootReducers>;
