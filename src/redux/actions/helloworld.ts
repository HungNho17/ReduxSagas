import * as types from './types';

export function sayHelloWorld (helloWorld: string) {
 return {
  type: types.HELLO_WORLD,
  payload: helloWorld,
 }
}
