import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import { RootStack } from './src/config/router';

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
