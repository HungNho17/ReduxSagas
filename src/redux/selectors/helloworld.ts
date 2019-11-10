import { IAppState } from "../reducers/combineReducers";

export function getHelloWorld(state: IAppState) {
 return state.helloWorld.helloworld;
}