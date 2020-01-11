import * as React from 'react';
import HelloWorld from './components/helloWorld';
import { HelloCanvas } from './components/helloCanvas';
import { HelloWebGl } from './components/helloWebGl';

class App extends React.Component<any, any> {
 render() {
  return (
   <div>
    <HelloWorld/>
    <HelloCanvas/>
   </div>
  );
 };
}

export default App;