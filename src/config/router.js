import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { Home } from '../scenes/home/screens/';

export const RootStack = StackNavigator({
  Home: {
    screen: Home
  }
});
