import * as React from 'react';
import { connect } from 'react-redux';
import * as Selectors from '../redux/selectors';
import * as Actions from '../redux/actions';
import { IAppState } from '../redux/reducers';

interface IProps {
 helloworld: '',
 sayHelloWorld: () => void,
}

class HelloWorld extends React.Component<IProps, any> {
 render() {
  return (
   <div>
    <div>{this.props.helloworld}</div> 
    <input type='button' onClick={this.props.sayHelloWorld} value='Click'/>
   </div>
  );
 };
}

const mapStatetoProp = (state: IAppState) => {
 return {
  helloworld: Selectors.getHelloWorld(state),
 };
};

const mapDispathToProp = (dispatch: any) => {
 return {
  sayHelloWorld: () => {
   dispatch(Actions.sayHelloWorld('hello Hung'));
  }
 };
};

export default connect(mapStatetoProp, mapDispathToProp)(HelloWorld);
