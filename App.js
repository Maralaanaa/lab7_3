import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent' 
export default class App extends React.Component {
state = {
  myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis au te irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
  updateState = () => {
    this.setState({ myState: 'The state is updated!!!' })
  }
  render() {
    return (
      <View>
        <PresentationalComponent myState={this.state.myState} updateState={this.updateState} />
      </View> 
    );
  }
}
