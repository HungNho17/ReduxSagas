import { HELLO_WORLD } from "../actions/types";
import { IHelloWorld } from '../interfaces';

const initialize: IHelloWorld = {
 helloworld: 'hello world',
};

export function helloWorld(state = initialize, action: any): IHelloWorld {
 switch (action.type){
  case HELLO_WORLD:
   return {...state, helloworld: action.payload};

  default:
   return state;
 }
}
