import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { Home, Profile, EventDetails, AllEvents } from '../scenes';

const HomeStack = FluidNavigator(
  {
    Home: { screen: Home },
    AllEvents: { screen: AllEvents },
    Details: { screen: EventDetails }
  },
  {
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'music-circle';
        } else if (routeName === 'Profile') {
          iconName = 'account';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: '#E43F6F',
      inactiveTintColor: '#8C8E8E',
      activeBackgroundColor: '#FBFCFC',
      showLabel: false,
      style: {
        backgroundColor: '#FBFCFC'
      }
    }
  }
);

export const RootStack = createSwitchNavigator(
  {
    Home: Tabs
  },
  {
    initialRouteName: 'Home'
  }
);
